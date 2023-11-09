import {
    ChevronUpDownIcon
} from "@heroicons/react/24/outline";
import {
    Card,
    Typography
} from "@material-tailwind/react";
import { isLoading, lista } from "./CustomSignal";






export const SortableTable = ({ header, rows }: { header: Array<{ title: string, sortableKey: string }>, rows: Array<{ userId?: number, id?: number, title?: string, completed?: boolean }> }) => {

    type rowKey = keyof typeof rows

    const order = (sortableKey: string) => {
        const key = sortableKey as rowKey;
        isLoading.value = true;
        lista.value = lista.peek().sort((v1, v2) => {
            const id1 = (v1 as any)[key];
            const id2 = (v2 as any)[key];
            if (id1 > id2 || id2 > id1) return -1;
            return 0;
        })
        isLoading.value = false;
        console.info("Funge");
    }




    return (
        <Card className="h-full w-full">
            <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {header.map(({ sortableKey, title }) => (
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
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(
                        ({ completed, id, title, userId }, index) => {
                            const isLast = index === rows.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
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
                            );
                        },
                    )}
                </tbody>
            </table>


        </Card>
    );
}