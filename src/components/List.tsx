import { computed, effect } from "@preact/signals-react";
import { lista, isLoading } from "./CustomSignal";
import { Chip, Spinner } from "@material-tailwind/react";
import { SortableTable } from "./SortableTable";

export const List = () => {
    const totale = computed(() => lista?.value?.length ?? 0);

    const ShowList = () => {
        return <SortableTable header={[{ title: 'Id utente', sortableKey: 'userId' }, { title: 'Id', sortableKey: 'id' }, { title: 'Titolo', sortableKey: 'title' }, { title: 'Completato', sortableKey: 'completed' }]} rows={lista.value} />;
    }


    effect(() => { totale; <ShowList /> })


    return (
        <>
            {
                !isLoading.value ? <>
                    <div className="flex justify-center gap-2 my-2">
                        <Chip value={totale} color="red" />
                    </div>
                    <ShowList />

                </> : <><Spinner /></>
            }


        </>
    )

}