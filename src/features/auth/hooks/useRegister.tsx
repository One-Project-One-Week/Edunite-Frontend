import { useMutation } from "@tanstack/react-query";
import { useRegisterOption } from "@/queries/authQueryOptions";


export const useRegister = () => {

    const registerOption = useRegisterOption();

    return useMutation({
        ...registerOption,
    })
}
