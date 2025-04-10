import { useParams } from 'react-router-dom'

import { useSingleProductQuery } from '../../state/queries/products/product'

import SingleProduct from '../../components/SingleProduct'

const Product = () => {
    const { id } = useParams()

    const {
        data,
        isLoading,
        isError,
        error
    } = useSingleProductQuery(id)

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
        <>
            <SingleProduct singleProduct={data} />
        </>
    )
}

export default Product