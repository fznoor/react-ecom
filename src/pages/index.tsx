import Product from '../components/ProductList'

import { useProductQuery } from '../state/queries/products/product'

const Home = () => {
    const {
        data,
        isLoading,
        isError,
        error
    } = useProductQuery()

    if (isLoading) {
        return <p style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            Loading...
        </p>
    }
    if (isError) {
        return <p>{error.message} check your internet</p>
    }
    return (
        <Product product={data} />
    )
}

export default Home