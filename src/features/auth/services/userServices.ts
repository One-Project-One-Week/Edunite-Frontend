import API from "@/api/apiConfig";


export const register = async (data: {username: string, password: string, role: string}) => {
    const response = await API.post("/auth/register", data);
    return response.data;
}

export const login = async (credential: { username: string, password: string}) => {
    const response = await API.post("/auth/login", credential);
    return response.data;
}