import { signal } from "@preact/signals-react";

const count = signal(0);
const lista = signal<{ userId?: number, id?: number, title?: string, completed?: boolean }[]>([]);
const isLoading = signal<boolean>(false);


export { count, lista, isLoading }