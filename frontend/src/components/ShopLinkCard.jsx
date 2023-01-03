import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    position: relative;
`

const ShopLink = styled(Link)`
    width: 100%;
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:hover {
        opacity: 1;
    }
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.span`
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
`

const ShopLinkCard = ({image, path, linkText}) => {
    return (
        <Container> 
            <ShopLink to={path} style={{ backgroundImage: `url(${image})`}}>
                <ImageContainer>
                    <Image src={image} alt='images' />
                </ImageContainer>

                <Overlay>
                    <TextContainer>
                        <Text> { linkText } </Text>
                    </TextContainer>
                </Overlay>
            </ShopLink>
        </Container>
    )
}

export default ShopLinkCard