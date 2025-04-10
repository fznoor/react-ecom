export interface ICart {
    id: number
    image: string
    title: string
    price: number
    name?: string
    quantity: number
}

export type CartContextProps = {
    cart: ICart[]
    subTotal: number | null
    addToCart: (
        id: number,
        image: string,
        title: string,
        price: number
    ) => void
    setIncrement: (id: number, quantity: number) => void
    setDecrement: (id: number, quantity: number) => void
    removeCart: (id: number) => void
    getSubTotal: () => void
}

export type CartProps = {
    cart: ICart[]
    setIncrement: (id: number, quantity: number) => void
    setDecrement: (id: number, quantity: number) => void
    removeCart: (id: number) => void
    getSubTotal: () => void
    subTotal: number | null
}