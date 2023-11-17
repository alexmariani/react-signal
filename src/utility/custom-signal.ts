import { Signal, signal } from "@preact/signals-react";

const count: Signal<number> = signal(0);
const lista: Signal<{ userId?: number, id?: number, title?: string, completed?: boolean }[]> = signal<{ userId?: number, id?: number, title?: string, completed?: boolean }[]>([]);
const isLoading: Signal<boolean> = signal<boolean>(false);
const pagination: Signal<{ pageNumber: number, itemForPage: number, totalPage?: number }> = signal<{ pageNumber: number, itemForPage: number, totalPage?: number }>({ pageNumber: 0, itemForPage: 10 });
const isModalOpen: Signal<boolean> = signal(false);
const dettaglioTodoS: Signal<{ userId?: number, id?: number, title?: string, completed?: boolean } | null> = signal<{ userId?: number, id?: number, title?: string, completed?: boolean } | null>(null);
const dettaglioTodoLoading: Signal<boolean> = signal(false);

export { count, isLoading, lista, pagination, isModalOpen, dettaglioTodoS,dettaglioTodoLoading };
