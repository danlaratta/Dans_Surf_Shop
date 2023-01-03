import styled from 'styled-components/macro'

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


const ImageContainer = styled.div`
    min-height: 25.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
`


const Image = styled.img`
    max-width: 65%;
    height: auto;
    object-fit: initial;

    &:hover {
        transform: scale(1.1);
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
                <ImageContainer>
                    <Image src={image} alt="product imgs" />
                </ImageContainer>

                <TextContainer>
                    <Title> { title } </Title>
                    <Price> { price } </Price>
                </TextContainer>
            </Wrapper>
        </Container>
    )
}

export default ProductCard