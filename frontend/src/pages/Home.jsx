import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax' 
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ShopLinkCard from '../components/ShopLinkCard'
import Img1 from '../assets/men.jpg'
import Img2 from '../assets/women.jpg'
import Img3 from '../assets/accessories.jpg'
import ParallaxImg from '../assets/bg2.jpg'
import ClubBg from '../assets/club.jpg'

const Container = styled.div`
    width: 100%;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 0rem;
`

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
`

const LinksItem = styled.div`
    width: 100%;
    flex: 1;
`

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10rem;
`

const ProductTitle = styled.span`
    font-size: 2.8rem;
    font-weight: 600;
`

const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    padding-bottom: 10rem;
`

const ProductItems = styled.div`
    max-width: 100%;
    flex: 1;
`

const SaleContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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

const ClubContainer = styled.div`
    width: 100%;
    min-height: 40vh;
    background-image: url(${ClubBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10rem;
`

const ClubWrapper = styled.div`
    width: 100%;
    min-height: 40vh;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`

const ClubTextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
`

const ClubTitle = styled.span`
    font-size: 4.5rem;
    font-weight: 800;
    color: #fff;
`

const ClubDesc = styled.span`
    font-size: 2rem;
    color: #fff;
    line-height: 3rem;
`

const ClubLink = styled(Link)`
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    border: 0.25rem solid #fff;
    padding: 1rem 2rem;
    margin-top: 0.7rem;
    border-radius: 0.5rem;
`




const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await Axios.get('https://fakestoreapi.com/products?limit=16')
            setProducts(res.data)
        }

        getProducts()
    }, [])

    let details = [
        {'id': 1, 'image': Img1, 'path': '/mens', 'linkText': 'Men'},
        {'id': 2, 'image': Img2, 'path': '/womens', 'linkText': 'Women'},
        {'id': 3, 'image': Img3, 'path': '/accessories', 'linkText': 'Accessories'},
    ] 

    return (
        <Container>
            <Hero />

            <Content>
                <Wrapper>
                    <LinksContainer>
                        {details.map((d) => (
                            <LinksItem key={d.id}>
                                <ShopLinkCard image={d.image} path={d.path} linkText={d.linkText} p={products} />
                            </LinksItem>
                        ))}
                    </LinksContainer>

                    <TitleContainer>
                          <ProductTitle> New Arrivals </ProductTitle>  
                    </TitleContainer>

                    <ProductContainer>
                        {(products.filter(product => product.category === "men's clothing" || product.category === "women's clothing")).slice(1).map((p) => (
                            <ProductItems key={p.id}> 
                                <ProductCard image={p.image} title={p.title} price={p.price} />
                            </ProductItems>
                        ))}
                    </ProductContainer>
                </Wrapper>
                
                <Parallax 
                    bgImage={ParallaxImg}
                    bgImageAlt="bg img"
                    strength={-200}
                    style={{width: '100%', height: '100vh'}}
                > 
                    <SaleContainer>
                        <TextContainer>
                            <Title>  Huge Holiday Sale </Title>
                            <Slogan> Enjoy 50% Off On Select Items </Slogan>
                            <ShopLink to='/sale'> Shop Sale </ShopLink>
                        </TextContainer>
                    </SaleContainer>
                </Parallax>
                            
                
                <ClubContainer>
                    <ClubWrapper>
                        <ClubTextContainer>
                            <ClubTitle>  Join The Crew </ClubTitle>
                            <ClubDesc> Get reward points by shopping, inviting your <br/> friends to join, and more! </ClubDesc>
                            <ClubLink to='/'> Join Now </ClubLink>
                        </ClubTextContainer>
                    </ClubWrapper>
                </ClubContainer>
            </Content>
        </Container>
    )
}

export default Home