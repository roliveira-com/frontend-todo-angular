export interface Task {
    id: string;
    title: string;
    description?: string;
    created: string;
    due?: string;
    progress?: number;
    done: boolean;
}
