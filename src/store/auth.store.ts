import { create } from "zustand";

interface AuthState{
    status : 'authenticated'| 'unanthenticated' | 'checking';
    token?: string;
    user?:{
        name: string;
        email: string;
    }
    login: (email:string, password:string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) =>({
    status : 'checking',
    token:undefined,
    user: undefined,

    login: (email:string, password:string) => {
        set({
            status: 'authenticated',
            token:'abcd123',
            user: {
                name:'Piero M',
                email: email,
            }
        })
    },
    logout: () => {
        set({status:'unanthenticated', token: undefined, user:undefined})
    }
}))