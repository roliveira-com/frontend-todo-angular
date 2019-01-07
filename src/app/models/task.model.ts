export interface Task {
    id: number;
    user: number;
    list: number;
    title: string;
    description?: string;
    created_at: string;
    due?: string;
    progress?: number;
    done: boolean;
}

// new Date().toJSON().slice(0, 19).replace('T', ' ');
