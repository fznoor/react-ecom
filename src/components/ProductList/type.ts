export interface IProduct {
    id: number
    image: string
    title: string
    category: string
    price: number
}

export type ProductListProps = {
    product: IProduct[] | undefined
}