
// import { Counter } from "./Counter"
import { effect, useSignal } from "@preact/signals-react";
import { List } from "./List"


export const Wrapper = () => {
    // const count = useSignal(0);
    const lista = useSignal<{ userId?: number, id?: number, title?: string, completed?: boolean }[]>([]);

    effect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json) => lista.value = json)
            .then(json => console.info(json))
            .catch(e => console.error(e))
    })

    const filtra = () => {
        lista.value = lista.peek().filter(v => v.completed);
        console.info(lista.value);
    }

    return (<>

        <button onClick={() => filtra()}>Filtra</button><br /> <br />
        <List lista={lista} ></List>
    </>)
}
