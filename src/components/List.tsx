import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Chip, Spinner, Typography } from "@material-tailwind/react";
import { computed } from "@preact/signals-react";
import { CustomButtom } from "../ui/CustomButton";
import { order } from "../utility/common-function";
import { dettaglioTodoLoading, dettaglioTodoS, isLoading, isModalOpen, lista, pagination } from "../utility/custom-signal";
import { CustomDialog } from "./CustomDialog";
import { SortableTable } from "./SortableTable";

export const List = () => {

    //Reactive subsection for signal

    const totale = computed(() => lista?.value?.length ?? 0);

    const paginatedList = computed(() => lista.value.slice((pagination.value.itemForPage * pagination.value.pageNumber), (pagination.value.itemForPage * (pagination.value.pageNumber + 1) - 1)))

    const ShowList = () =>
        <SortableTable RowsMap={rowsMapper} HeaderMap={headerMapper} />;

    pagination.value.totalPage = Math.ceil((lista.value.length / pagination.value.itemForPage))


    //Fine reactive subsection for signal

    //Table header
    const header: Array<{ title: string, sortableKey: string }> =
        [{ title: 'Id utente', sortableKey: 'userId' }, { title: 'Id', sortableKey: 'id' }, { title: 'Titolo', sortableKey: 'title' }, { title: 'Completato', sortableKey: 'completed' }]

    //Fine table header
    //Header and rows mapper for table


    let orderType: 'ASC' | 'DESC' = 'ASC';

    const orderBy = (sortableKey: string) => {
        order(sortableKey, orderType);
        orderType = orderType == 'ASC' ? 'DESC' : 'ASC'
        console.info(orderType);
    }


    const dettaglioTodo = (id: number) => {
        isModalOpen.value = true;
        dettaglioTodoLoading.value = true;
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then((json: { userId?: number, id?: number, title?: string, completed?: boolean }) => dettaglioTodoS.value = json)
            .then(json => console.info(json))
            .then(() => dettaglioTodoLoading.value = false)
            .catch(e => console.error(e))
    }





    const headerMapper = () => {
        return header.map(({ sortableKey, title }) => (
            <th
                key={title}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-50/50 p-4 transition-colors hover:bg-blue-50"
            >

                <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    onClick={() => orderBy(sortableKey)}
                >
                    {title}{" "}
                    {orderType == 'ASC' ?
                        <ChevronUpIcon strokeWidth={2} className="h-4 w-4" /> :
                        <ChevronDownIcon strokeWidth={2} className="h-4 w-4" />
                    }
                </Typography>

            </th>
        ))

    }

    const rowsMapper = () => {
        return paginatedList?.value?.map(
            ({ completed, id, title, userId }, index) => {
                const isLast = index === paginatedList?.value?.length - 1;
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

                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        <CustomButtom size="sm" action={() => dettaglioTodo(id ?? 0)} variant="text">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </CustomButtom>
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




    const DialogBody = (): JSX.Element => <>
        {

            !dettaglioTodoLoading.value ?
                <div className="grid grid-flow-row auto-rows-max">
                    <div>
                        Id utente : {dettaglioTodoS.value?.userId}
                    </div>
                    <div>
                        Id  : {dettaglioTodoS.value?.id}
                    </div>
                    <div>
                        Titolo  : {dettaglioTodoS.value?.title}
                    </div>
                    <div>
                        Completato  : {dettaglioTodoS.value?.completed}
                    </div>
                </div> : <Spinner />
        }
    </>


    const DialogHeader = (): JSX.Element => <>
        <span>Dettaglio Todo  {!dettaglioTodoLoading.value ? dettaglioTodoS.value?.id : null}</span>
    </>

    const DialogFooter = (): JSX.Element => <>
        <CustomButtom action={() => isModalOpen.value = false}>Chiudi</CustomButtom>
    </>




    return (
        <>
            {
                !isLoading.value ? <>
                    <div className="flex justify-center gap-2 my-2">
                        <Chip value={totale} color="red" />
                    </div>
                    <ShowList />
                    <CustomDialog body={<DialogBody />} header={<DialogHeader />} footer={<DialogFooter />} handleModal={() => isModalOpen.value = !isModalOpen.value} />
                </> : <><Spinner /></>
            }
        </>
    )

}