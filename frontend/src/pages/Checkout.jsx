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
    background-color: #f8f8f8;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const SectionContainer = styled.div`
    width: 85%;
    display: flex;
`

const Sections = styled.div`
    flex: 1;
    background-color: blue;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 0rem;
    background-color: red;
`


const Checkout = () => {
    return (
        <Container>
            <FreeShipping />

            <Wrapper>
                <SectionContainer>
                    <Sections>
                        <CardsContainer>
                            <CartCard />
                            <CartCard />
                            <CartCard />
                        </CardsContainer>
                    </Sections>

                    <Sections>
                        <OrderSummary />
                    </Sections>
                </SectionContainer>
            </Wrapper>
        </Container>
    )
}

export default Checkout