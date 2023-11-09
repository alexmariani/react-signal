import { Signal, computed, effect } from "@preact/signals-react";




export const List = ({ lista, isLoading }: { lista: Signal<{ userId?: number, id?: number, title?: string, completed?: boolean }[]>, isLoading: Signal<boolean> }) => {
    const totale = computed(() => lista?.value?.length ?? 0);

    const ShowList = () => {
        return lista?.value.map((v, i) =>
            <>
                <><span key={i}>{v.userId} {v.id} {v.title} {v.completed}</span> <br /></>
            </>
        )
    }


    effect(() => { totale; <ShowList /> })


    return (
        <>
            {
                !isLoading.value ? <>
                    {totale} < br />
                   
                    {
                        <ShowList />
                    }
                </> : <span>Loading ...</span>
            }


        </>
    )

}