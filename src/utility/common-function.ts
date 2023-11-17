import { isLoading, lista } from "./custom-signal";


type rowKey = keyof typeof lista.value


export const order = (sortableKey: string, order: 'ASC' | 'DESC') => {
    console.info(order);
    const key = sortableKey as rowKey;
    isLoading.value = true;
    lista.value = lista.value.sort((v1, v2) => {
        const id1 = (v1 as any)[key];
        const id2 = (v2 as any)[key];
        if (id1 > id2) return order == 'ASC' ? 1 : -1;
        if (id2 > id1) return order == 'ASC' ? -1 : 1;
        return 0;
    })
    isLoading.value = false;
    console.info("Funge");
}


