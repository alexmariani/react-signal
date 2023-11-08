import { Signal, computed } from "@preact/signals-react";




export const List = ({ lista }: { lista: Signal<{ userId?: number, id?: number, title?: string, completed?: boolean }[]> }) => {


    const totale = computed(() => lista.value.filter(v => v.completed).length);



    return (
        <>

            {totale} <br />
            {
                lista?.value.map((v, i) =>
                    <>
                        {v.completed ? <><span key={i}>{v.userId} {v.id} {v.title} {v.completed}</span> <br /></> : null}
                    </>
                )
            }



        </>
    )

}