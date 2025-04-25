import {create} from 'zustand';
import { BaseUser, Stundent, Teacher } from '@/types/User';
import { dummyStudents } from '@/assets/dummy-datas/user';

type UserStore = {
    user: Stundent | Teacher | BaseUser,
    setUser: (user: Stundent | Teacher) => void,
    clearUser: () => void,
}

const useUserStore = create<UserStore>((set) => ({
    user: dummyStudents[0] as Stundent | Teacher | BaseUser,
    setUser: (user: Stundent | Teacher | BaseUser) => {
        set({ user})
    },
    clearUser: () => {
        set({ user: {} as Stundent | Teacher | BaseUser})
    }
    
}))


export default useUserStore;