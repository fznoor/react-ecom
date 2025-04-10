import { NavLink } from 'react-router-dom'

import { ProductListProps } from './type'

import { css } from '@emotion/react'

const styles = {
    productTitle: css`
    text-align: center;
    margin-top: 7rem;

    p {
        color: blue;
        font-size: 1.4rem;
    }
}`,
    productListContainer: css`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`,
    productList: css`
        width: 27rem;
        height: 25rem;
        border: 1px solid rgb(239, 239, 239);
        border-radius: 4px;
        padding: 1rem 1rem;
        display: flex;
        flex-direction: column;

        @media (max-width: 800px) {
        width: 70vw !important;
        height: 30rem !important;
       }

        img {
            width: fit-content;
            height: 12rem;
            margin: 0 auto;
        }
        p {
            text-transform: capitalize;
            padding: .5rem 0;
            font-weight: bold;
            font-size: 1.4rem;
        }

        p:nth-child(2),
        p:nth-child(4) {
            font-weight: lighter;
        }
`
}

const Product = ({ product }: ProductListProps) => {
    return (
        <>
            <span css={styles.productTitle}>
                <p>PRODUCTS</p>
                <h2>MOST POPULAR PRODUCTS</h2>
            </span>

            <div css={styles.productListContainer}>
                {product?.map((curElem) => {
                    const { id, image, title, category, price } = curElem
                    let newTitle = title.substring(0, 50)
                    return (
                        <NavLink to={`/product/${id}`} key={id}
                            style={{ textDecoration: 'none', color: '#000' }}>
                            <div css={styles.productList}>
                                <img
                                    src={image}
                                    alt={title}
                                />
                                <p>{category}</p>
                                <p>{newTitle.length > 49 ? `${newTitle}...` : newTitle}</p>
                                <p>${price}</p>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </>
    )
}

export default Product