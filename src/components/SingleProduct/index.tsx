import { ISingleProduct, SingleProductProps } from './type'

import { useCartContext } from '../Cart/context'

import { css } from '@emotion/react'

const styles = {
    singleProductContainer: css`
        margin-top: 6rem;
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        
        @media (max-width: 800px) {
         height: 100% !important;
        }
    }
    `,
    singleProduct: css`
        margin-top: 5rem;
        width: 64%;
        display: flex;
        justify-content: center;
        align-items: center;

         @media (max-width: 800px){
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        img {
            width: 25rem;
            height: fit-content;
        }
           
    `,
    details: css`
            margin: .7rem 1rem;
            .increment,
            .decrement {
                width: 3rem;
                height: 3rem;
                background: transparent;
                border: 1px solid rgb(210, 210, 210);
                cursor: pointer;
            }
            input {
                width: 5rem;
                text-align: center;
                height: 3rem;
                border: .2px solid rgb(210, 210, 210);
                outline: none;
}   
            p {
                margin: 2rem 0;
                font-weight: bold;
            }   
            p:nth-child(2) {
                color: rgb(90, 90, 90);
                font-weight: lighter;
            }
    `,
    addToCart: css`
            background: rgb(104, 93, 255);
            color: #fff;
            border: none;
            padding: .7rem 2rem;
            margin-left: .5rem;
            cursor: pointer;
`,
}

const SingleProduct = ({ singleProduct }: SingleProductProps) => {
    const { addToCart } = useCartContext()

    const {
        id,
        image,
        title,
        price,
        description,
    } = singleProduct as ISingleProduct
    return (
        <>
            <div css={styles.singleProductContainer}>
                <div css={styles.singleProduct}>
                    <img
                        src={image}
                        alt={title}
                    />
                    <div css={styles.details}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button css={styles.addToCart} onClick={() =>
                            addToCart(
                                id,
                                image,
                                title,
                                price,
                            )}
                        >
                            Add to cart
                        </button>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct