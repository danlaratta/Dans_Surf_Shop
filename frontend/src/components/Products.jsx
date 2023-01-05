import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import ProductCard from '../components/ProductCard'
import Axios from 'axios'

const Container = styled.div`
    width: 100%;
    padding-top: 0.55rem;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 13rem;
`

const ProductItems = styled.div`
    max-width: 22%;
    padding: 2rem 0rem;
`

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await Axios.get('https://fakestoreapi.com/products')
            setProducts(res.data)
        }

        getProducts()
    }, [])

    return (
        <Container>
            <Wrapper>
                <ProductContainer>
                    {(products.filter(product => product.category === "men's clothing")).slice(1).map((p) => (
                        <ProductItems key={p.id}> 
                            <ProductCard image={p.image} title={p.title} price={p.price} />
                        </ProductItems>
                    ))}

                    {(products.filter(product => product.category === "men's clothing")).slice(1).map((p) => (
                        <ProductItems key={p.id}> 
                            <ProductCard image={p.image} title={p.title} price={p.price} />
                        </ProductItems>
                    ))}

                    {(products.filter(product => product.category === "men's clothing")).slice(1).map((p) => (
                        <ProductItems key={p.id}> 
                            <ProductCard image={p.image} title={p.title} price={p.price} />
                        </ProductItems>
                    ))}

                    {(products.filter(product => product.category === "men's clothing")).slice(1).map((p) => (
                        <ProductItems key={p.id}> 
                            <ProductCard image={p.image} title={p.title} price={p.price} />
                        </ProductItems>
                    ))}

                    {(products.filter(product => product.category === "men's clothing")).slice(1).map((p) => (
                        <ProductItems key={p.id}> 
                            <ProductCard image={p.image} title={p.title} price={p.price} />
                        </ProductItems>
                    ))}

                    {(products.filter(product => product.category === "men's clothing")).slice(1).map((p) => (
                        <ProductItems key={p.id}> 
                            <ProductCard image={p.image} title={p.title} price={p.price} />
                        </ProductItems>
                    ))}
                    
                </ProductContainer>
            </Wrapper>
        </Container>
    )
}

export default Products