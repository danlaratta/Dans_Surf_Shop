import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax' 
import Img from '../assets/bg.jpg'

const Overlay = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: -12rem;
`

const Title = styled.span`
    font-size: 4.5rem;
    font-weight: 800;
    color: #fff;
`

const Slogan = styled.span`
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
`

const ShopLink = styled(Link)`
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    border: 0.25rem solid #fff;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
`

const Hero = () => {
    return (
        <Parallax 
            bgImage={Img}
            bgImageAlt="bg img"
            strength={-122}
            style={{width: '100%', height: '100vh', position: 'relative'}}
        > 
            <Overlay>
                <TextContainer>
                    <Title> Dan's Surf Shop </Title>
                    <Slogan> High Tides and Good Vibes </Slogan>
                    <ShopLink to='/'> Shop Now </ShopLink>
                </TextContainer>
            </Overlay>
        </Parallax>
    )
}

export default Hero