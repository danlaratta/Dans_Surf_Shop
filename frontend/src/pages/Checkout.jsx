import React from 'react'
import styled from 'styled-components/macro'
import CartCard from '../components/CartCard'
import FreeShipping from '../components/FreeShipping'

const Container = styled.div`
    width: 100%;
    padding-top: 1.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Test = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 0rem;
`


const Checkout = () => {
    return (
        <Container>
            <FreeShipping />
            
            <Test>
                <CartCard />
                <CartCard />
                <CartCard />
            </Test>
        </Container>
    )
}

export default Checkout