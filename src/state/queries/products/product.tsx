import { useQuery } from '@tanstack/react-query'

import { IProduct } from '../../../components/ProductList/type'
import { ISingleProduct } from '../../../components/SingleProduct/type'

export const useProductQuery = () => {
    return useQuery<IProduct[]>({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            return data
        },
        staleTime: 10000 * 5
    })
}

export const useSingleProductQuery = (id: string | undefined) => {
    return useQuery<ISingleProduct>({
        queryKey: ['singleProduct', id],
        queryFn: async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            return data
        },
        staleTime: 10000 * 5
    })
} 