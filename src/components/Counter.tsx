import { computed } from "@preact/signals-react";
import { count } from "./CustomSignal";
import { Chip } from "@material-tailwind/react";
import { CustomButtom } from "../ui/CustomButton";

export const Counter = () => {
    computed(() => console.info(count.value));
    return (<>
        <div className="flex justify-center h-24">
            <div className="self-start">
                <Chip value={count.value} color="cyan" />
            </div>
            <div className="self-center">
                <CustomButtom action={() => count.value++} size="md" variant="gradient" color="blue">+</CustomButtom>
                <CustomButtom action={() => count.value--} size="md" variant="gradient" color="blue">-</CustomButtom>
            </div>
        </div>
    </>)
}