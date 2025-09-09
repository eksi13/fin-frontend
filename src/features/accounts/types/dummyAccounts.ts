export interface AccountData {
    id: number;
    name: string;
    balance: number;
    type: number;
    currency: number;
    lastUpdated: Date;
}

export const accounts: AccountData[] = [];

accounts.push(
    {
        id: 1,
        name: "Checking Account",
        balance: 1200,
        type: 1,
        currency: 1,
        lastUpdated: new Date("2025-08-01")
    },
    {
        id: 2,
        name: "Savings Account",
        balance: 5000,
        type: 2,
        currency: 1,
        lastUpdated: new Date("2025-08-02")
    },
    {
        id: 3,
        name: "Credit Card",
        balance: -250,
        type: 3,
        currency: 2,
        lastUpdated: new Date("2025-08-03")
    }
);
