export interface ISingleProduct {
    id: number
    image: string
    price: number
    title: string
    description: string
}

export type SingleProductProps = {
    singleProduct: {} | undefined
}