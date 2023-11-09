
// import { Counter } from "./Counter"
import { useSignal } from "@preact/signals-react";
import { List } from "./List"
import { useEffect } from "react";
import { Counter } from "./Counter";


export const Wrapper = () => {
    const count = useSignal(0);
    const lista = useSignal<{ userId?: number, id?: number, title?: string, completed?: boolean }[]>([]);
    const isLoading = useSignal<boolean>(false);


    useEffect(() => {
        isLoading.value = true;
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then((json: { userId?: number, id?: number, title?: string, completed?: boolean }[]) => lista.value = json)
            .then(json => console.info(json))
            .then(() => isLoading.value = false)
            .catch(e => console.error(e))
    }, [])

    const order = (order: "ASC" | "DESC") => {
        isLoading.value = true;
        lista.value = lista.peek().sort((v1, v2) => {
            const id1 = v1.id ?? 0;
            const id2 = v2.id ?? 0;
            if (id1 > id2) return order == 'ASC' ? 1: -1;
            if (id2 > id1) return order == 'DESC' ? -1 : 1;
            return 0;
        })
        isLoading.value = false;
        console.info("Funge");
    }



    return (<>
        <Counter count={count}></Counter> <br /> <br />
        {/* <button onClick={() => order('ASC')}>Filtra ASC</button> */}
        <button onClick={() => order('DESC')}>Ordina</button><br /> <br />
        <List lista={lista} isLoading={isLoading} ></List>
    </>)
}
