import { useMutation } from "@tanstack/react-query";
import { useLoginOption } from "../queries/authQueryOptions";


export const useLogin = () => {

    const loginOption = useLoginOption();

    return useMutation({
        ...loginOption,
    })
}