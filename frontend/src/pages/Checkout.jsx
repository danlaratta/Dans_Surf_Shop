import React from 'react'
import styled from 'styled-components/macro'
import CartCard from '../components/CartCard'
import FreeShipping from '../components/FreeShipping'
import OrderSummary from '../components/OrderSummary'

const Container = styled.div`
    width: 100%;
    padding-top: 1.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
`

const Wrapper = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const TitleContainer = styled.div`
    width: 72.2%;
    padding-top: 5rem;
`

const Title = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
`

const SectionContainer = styled.div`
    width: 85%;
    display: flex;
`

const CartSection = styled.div`
    flex: 8;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0rem;
`

const SummarySection = styled.div`
    flex: 4;
    padding: 2.5rem 0rem;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`


const Checkout = () => {
    return (
        <Container>
            <FreeShipping />

            <Wrapper>
                <TitleContainer> 
                    <Title> Cart(3) </Title>
                </TitleContainer>

                <SectionContainer>
                    <CartSection>
                        <CardsContainer>
                            <CartCard />
                            <CartCard />
                            <CartCard />
                        </CardsContainer>
                    </CartSection>

                    <SummarySection>
                        <OrderSummary />
                    </SummarySection>
                </SectionContainer>
            </Wrapper>
        </Container>
    )
}

export default Checkout