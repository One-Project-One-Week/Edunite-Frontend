import API from "@/api/apiConfig";
import { dummyStudents } from "@/assets/dummy-datas/user";

export const register = async (data: { username: string; password: string; role: string }) => {
    try {
        const response = await API.post("/auth/register", data);
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

export const login = async (credential: { username: string; password: string }) => {
    try {
        const response = await API.post("/auth/login", credential);
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        // throw error;
        return dummyStudents[0];
    }
};