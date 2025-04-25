import {create} from 'zustand';
import { BaseUser, Stundent, Teacher } from '@/types/User';
type UserStore = {
    user: Stundent | Teacher | BaseUser,
    setUser: (user: Stundent | Teacher) => void,
    clearUser: () => void,
}

const useUserStore = create<UserStore>((set) => ({
    user: JSON.parse(localStorage.getItem("User") || '{}') as Stundent | Teacher | BaseUser,
    setUser: (user: Stundent | Teacher | BaseUser) => {
        set({ user})
    },
    clearUser: () => {
        set({ user: {} as Stundent | Teacher | BaseUser})
    }
    
}))


export default useUserStore;