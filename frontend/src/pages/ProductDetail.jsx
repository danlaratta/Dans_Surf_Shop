import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TestImg from '../assets/test.jpeg'
import FreeShipping from '../components/FreeShipping'

const Container = styled.div`
    width: 100%;
    padding-top: 0.55rem;
`

const Wrapper = styled.div`
    width: 100%;
    min-height: 88.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SectionsContainer = styled.div`
    width: 65%;
    min-height: 88.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`

const DetailSection = styled.div`
    flex: 1;
`

const ImageContainer = styled.div`
    width: 100%;
`

const Image = styled.img`
    width: 90%;
`

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    height: 100%;
`

const Title = styled.span`
    font-size: 2.8rem;
    font-weight: 700;
    width: 70%;
`

const Price = styled.span`
    font-size: 2.4rem;
    font-weight: 600;
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const DetailsTitle = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    padding-bottom: 1rem;
`

const DetailItems = styled.div`
    display: flex;
    gap: 1rem;
`

const Colors = styled.div`
    background-color: ${(props) => props.color};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 0.15rem solid #000;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

const Sizes = styled.span`
    width: 6rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 0.1rem solid #000;

    &:hover {
        background-color: #000;
        color: #fff;
        font-weight: 800;
        cursor: pointer;
    }
`

const AddBtn = styled.button`
    background-color: #000;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    width: 50%;
    padding: 1rem 0rem;
    border-radius: 0.5rem;
    cursor: pointer;
`

const Desc = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6rem;
`

const ProductDetail = () => {
    return (
        <Container>
            <FreeShipping />

            <Wrapper>
                <SectionsContainer>
                    <DetailSection>
                        <ImageContainer>
                            <Image src={TestImg} />
                        </ImageContainer>
                    </DetailSection>

                    <DetailSection>
                        <DetailsWrapper>
                            <Title> Mens Casual Premium Slim Fit T-Shirts </Title>
                            <Price> $25 </Price>

                            <DetailsContainer>
                                <DetailsTitle> COLOR:  </DetailsTitle>

                                <DetailItems>
                                    <Colors color="#fff" />
                                    <Colors color="#000" />
                                    <Colors color="#c4c4c4" />
                                    <Colors color="#517daa" />
                                    <Colors color="#cd0202" />
                                    <Colors color="#597f65" />
                                </DetailItems>
                            </DetailsContainer>

                            <DetailsContainer>
                                <DetailsTitle> SIZE:  </DetailsTitle>

                                <DetailItems>
                                    <Sizes> S </Sizes>
                                    <Sizes> M </Sizes>
                                    <Sizes> L </Sizes>
                                    <Sizes> XL </Sizes>
                                    <Sizes> XXL </Sizes>
                                </DetailItems>
                            </DetailsContainer>

                            <AddBtn> ADD TO CART </AddBtn>

                            <DetailsContainer>
                                <DetailsTitle> DESCRIPTION:  </DetailsTitle>

                                <Desc>
                                    Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.
                                </Desc>
                            </DetailsContainer>
                        </DetailsWrapper>
                    </DetailSection>
                </SectionsContainer>
            </Wrapper>
        </Container>
    )
}

export default ProductDetail