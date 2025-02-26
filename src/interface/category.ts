export interface ICategory {
    nameCategory: string 
    id:string| number ,
    image:string
  }
  export type ICategoryForm = Omit<ICategory,"id">