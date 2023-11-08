import { Signal, computed } from "@preact/signals-react";






export const Counter = ({ count }: { count: Signal }) => {

    computed(()=> console.info(count.value));
    return (<>
        {count.value} <br />
        <button onClick={() => count.value++}>+</button>
        <button onClick={() => count.value--}>-</button>
    </>)
}