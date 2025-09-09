export interface CategoryData {
    id: number;
    name: string;
    lastUpdated: Date;
    budget: number | null;
    type: number // income / expense
}

export const categories: CategoryData[] = [];

categories.push(
    {
        id: 1,
        name: "Salary",
        lastUpdated: new Date("2025-08-01"),
        budget: null,
        type: 0,
    },
    {
        id: 2,
        name: "Groceries",
        lastUpdated: new Date("2025-08-02"),
        budget: 300,
        type: 1,
    },
    {
        id: 3,
        name: "Entertainment",
        lastUpdated: new Date("2025-08-03"),
        budget: 150,
        type: 1,
    },
    {
        id: 4,
        name: "Utilities",
        lastUpdated: new Date("2025-08-04"),
        budget: 200,
        type: 1,
    },
    {
        id: 5,
        name: "Investment",
        lastUpdated: new Date("2025-08-05"),
        budget: null,
        type: 0,
    }
);
