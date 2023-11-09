import {
    Card
} from "@material-tailwind/react";

export const SortableTable = ({ HeaderMap, RowsMap }: { HeaderMap: () => JSX.Element[], RowsMap: () => JSX.Element[] }) => {
    return (
        <Card className="h-full w-full">
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
        </Card>
    );
}