import { Signal, effect } from "@preact/signals"






export const Counter = ({ count }: { count: Signal }) => {

    effect(()=> console.info(count.value));
    return (<>
        {count.value} <br />
        <button onClick={() => count.value++}>+</button>
        <button onClick={() => count.value--}>-</button>
    </>)
}