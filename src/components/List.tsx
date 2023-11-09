import { computed, effect } from "@preact/signals-react";
import { lista, isLoading } from "../utility/custom-signal";
import { Chip, Spinner, Typography } from "@material-tailwind/react";
import { SortableTable } from "./SortableTable";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { order } from "../utility/common-function";

export const List = () => {

    //Reactive subsection for signal

    const totale = computed(() => lista?.value?.length ?? 0);


    const ShowList = () =>
        <SortableTable RowsMap={rowsMapper} HeaderMap={headerMapper} />;


    effect(() => { totale; <ShowList /> })


    //Fine reactive subsection for signal





    //Table header
    const header: Array<{ title: string, sortableKey: string }> =
        [{ title: 'Id utente', sortableKey: 'userId' }, { title: 'Id', sortableKey: 'id' }, { title: 'Titolo', sortableKey: 'title' }, { title: 'Completato', sortableKey: 'completed' }]

    //Fine table header

    //Header and rows mapper for table

    const headerMapper = () => {
        return header.map(({ sortableKey, title }) => (
            <th
                key={title}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                onClick={() => order(sortableKey)}
            >
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                    {title}{" "}
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                </Typography>
            </th>
        ))

    }

    const rowsMapper = () => {
        return lista?.value?.map(
            ({ completed, id, title, userId }, index) => {
                const isLast = index === lista?.value?.length - 1;
                const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                return (
                    <>
                        <tr key={index}>
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {userId}
                                    </Typography>

                                </div>
                            </td>


                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {id}
                                    </Typography>

                                </div>
                            </td>


                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {title}
                                    </Typography>

                                </div>
                            </td>

                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {completed ? "Si" : "No"}
                                    </Typography>

                                </div>
                            </td>

                        </tr>
                    </>
                );
            },
        )

    }

    //Fine header and rows mapper for table









    return (
        <>
            {
                !isLoading.value ? <>
                    <div className="flex justify-center gap-2 my-2">
                        <Chip value={totale} color="red" />
                    </div>
                    <ShowList />

                </> : <><Spinner /></>
            }
        </>
    )

}