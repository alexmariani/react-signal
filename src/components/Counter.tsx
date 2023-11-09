import { count } from "../utility/custom-signal";
import { Chip } from "@material-tailwind/react";
import { CustomButtom } from "../ui/CustomButton";

export const Counter = () => {
    return (<>
        <div className="flex justify-center  h-24 my-3">
            <div >
                <Chip value={count.value} color="cyan" className="flex justify-center mb-2" />
                <div className="gap-2 flex">
                    <CustomButtom action={() => count.value++} size="md" variant="gradient" color="blue">+</CustomButtom>
                    <CustomButtom action={() => count.value > 0 ? count.value-- : null} size="md" variant="gradient" color="blue">-</CustomButtom>
                </div>
            </div>

        </div >
    </>)
}