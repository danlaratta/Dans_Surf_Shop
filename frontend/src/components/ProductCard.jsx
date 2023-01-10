import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProductDetailLink = styled(Link)`
`

const ImageContainer = styled.div`
    min-height: 25.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
`


const Image = styled.img`
    max-width: 65%;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    margin-top: 2rem;
    width: 65%;
`


const Title = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
`


const Price = styled.span`
    font-size: 1.2rem;
`


const ProductCard = ({image, title, price}) => {
    return (
        <Container>
            <Wrapper>
                <ProductDetailLink to='/product'> 
                    <ImageContainer>
                        <Image src={image} alt="product imgs" />
                    </ImageContainer>
                </ProductDetailLink>

                    <TextContainer>
                        <Title> { title } </Title>
                        <Price> { price } </Price>
                    </TextContainer>
            </Wrapper>
        </Container>
    )
}

export default ProductCard