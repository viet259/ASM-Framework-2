export interface IProduct {
  id: string | number,
  name: string,
  price: number,
  image: string,
  category: string,
  nameCategory: string,
  deskiptions: string,
  about: string
}
export type IProductForm = Omit<IProduct, "id">
