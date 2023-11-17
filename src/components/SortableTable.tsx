import {
    Card, CardBody, CardFooter
} from "@material-tailwind/react";
import { Pagination } from "./Pagination";

export const SortableTable = ({ HeaderMap, RowsMap }: { HeaderMap: () => JSX.Element[], RowsMap: () => JSX.Element[] }) => {

    const ReactiveSortableTable = () => <>
        <Card className="h-full w-full">
            <CardBody>
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            <HeaderMap />
                        </tr>
                    </thead>
                    <tbody>
                        <RowsMap />
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Pagination />
            </CardFooter>
        </Card></>



    return (
        <ReactiveSortableTable />
    );
}