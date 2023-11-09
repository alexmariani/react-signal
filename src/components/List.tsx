import { computed, effect } from "@preact/signals-react";
import { lista, isLoading } from "./CustomSignal";
import { Chip } from "@material-tailwind/react";

export const List = () => {
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
                    <div className="flex gap-2 my-2">
                        <Chip value={totale} />
                    </div>
                    {
                        <ShowList />
                    }
                </> : <span>Loading ...</span>
            }


        </>
    )

}