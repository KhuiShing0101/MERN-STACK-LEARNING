export interface BaseOption{
    onSuccess?:(data?:any) => void
    onError?:(error?:any) => void
}

export interface BaseUser{
    email ?: string;
    password ?: string;
}

export interface RegisterUserParams extends BaseUser,BaseOption{}

export interface LoginUserParams extends BaseUser,BaseOption{}

export interface User{
    name:string;
    email:string
}

export interface UserSlice{
    user:User | null;
    isLoading:boolean;
    error:Error|null;
}