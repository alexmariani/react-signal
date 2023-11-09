
import { useEffect } from "react";
import { Counter } from "./Counter";
import { isLoading, lista } from "../utility/custom-signal";
import { List } from "./List";




export const Wrapper = () => {
    useEffect(() => {
        isLoading.value = true;
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then((json: { userId?: number, id?: number, title?: string, completed?: boolean }[]) => lista.value = json)
            .then(json => console.info(json))
            .then(() => isLoading.value = false)
            .catch(e => console.error(e))
    }, [])





    return (<>
        <Counter></Counter>
        <List></List>
    </>)
}

