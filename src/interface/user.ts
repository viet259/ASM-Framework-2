

export interface IUser{
    id:number|string;
    name:string;
    email:string;
    phone:string;
    password:string;
 

}
export type IRegisterForm = Omit<IUser,"id">
export type ILoginForm = Pick<IUser,"email"|"password">