export type User = {
        id: number,
        name: string,
        email: string,
        phone_number: number,
        role: "Admin" | "User" | "Seller",
};