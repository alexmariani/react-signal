import { computed } from "@preact/signals-react";
import { count } from "./CustomSignal";

export const Counter = () => {
    computed(() => console.info(count.value));
    return (<>
        {count.value} <br />
        <button onClick={() => count.value++}>+</button>
        <button onClick={() => count.value--}>-</button>
    </>)
}