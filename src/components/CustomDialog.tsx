import { Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { isModalOpen } from "../utility/custom-signal";

export const CustomDialog = ({ header, body, footer, handleModal }: { header: JSX.Element, body: JSX.Element, footer: JSX.Element, handleModal: () => void }) => {

    return (
        <>
            <Dialog open={isModalOpen.value} handler={handleModal}>
                <DialogHeader>{header}</DialogHeader>
                <DialogBody>
                    {body}
                </DialogBody>
                <DialogFooter>
                    {footer}
                </DialogFooter>
            </Dialog>
        </>
    );
}