interface AuthState{
    status : 'authenticated'| 'unanthenticated' | 'checking';
    token?: string;
    user?:{
        name: string;
        email: string;
    }
}

export const useAuthStore = create<AuthState>()((set) =>{

})