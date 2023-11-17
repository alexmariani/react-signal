import { Typography } from "@material-tailwind/react"
import { CustomButtom } from "../ui/CustomButton"
import { isLoading, pagination } from "../utility/custom-signal"


export const Pagination = () => {


    const paginationAction = (action: () => void) => { isLoading.value = true; action(); isLoading.value = false }


    const ReactivePagination = () => <>

        <Typography variant="small" color="blue-gray" className="font-normal">
            Page {pagination.value.pageNumber + 1} of {pagination.value.totalPage}
        </Typography>
        <div className="flex gap-2">
            <CustomButtom variant="outlined" size="sm" action={() => paginationAction(() => pagination.value.pageNumber > 0 ? pagination.value.pageNumber-- : null)}>
                Previous
            </CustomButtom>
            <CustomButtom variant="outlined" size="sm" action={() => paginationAction(() => pagination.value.pageNumber < pagination.value.totalPage! - 1 ? pagination.value.pageNumber++ : null)}>
                Next
            </CustomButtom>
        </div>
    </>



    return <ReactivePagination />

}