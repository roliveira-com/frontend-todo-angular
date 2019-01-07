export interface Task {
    id: number;
    title: string;
    item_name: string;
    description?: string;
    created: string;
    due?: string;
    progress?: number;
    done: boolean;
}
