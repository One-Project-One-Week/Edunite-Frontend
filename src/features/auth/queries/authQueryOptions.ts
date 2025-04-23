import { useQueryClient, MutationOptions } from "@tanstack/react-query";
import { LoginResponse, Credential, RegisterStudentPayload, RegisterTeacherPayload, RegisterResponse } from "@/types/Auth";
import { login, register } from "../services/userServices";
import useAuthStore from "@/store/authStore";

export const useLoginOption = (): MutationOptions<
  LoginResponse,
  Error,
  Credential
> => {

    const queryClient = useQueryClient();
    const {setAccessToken} = useAuthStore();

  return {
    mutationFn: login,
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["auth"] });
        setAccessToken(data.accessToken)
      },
  };
};


export const useRegisterOption = (): MutationOptions<
    RegisterResponse,
    Error,
    RegisterStudentPayload | RegisterTeacherPayload
> => {

    const queryClient = useQueryClient();

    return {
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
          },
    }
}
