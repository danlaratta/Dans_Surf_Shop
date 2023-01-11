import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    width: 100%;
    padding-top: 6rem;
`

const FreeShippingBanner = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0rem;
`

const BannerText = styled.span`
    font-size: 1.2rem;
    color: #fff;

`

const FreeShipping = () => {
    return (
        <Container>
            <FreeShippingBanner>
                <BannerText> FREE SHIPPING ON ORDERS OVER $75! </BannerText>
            </FreeShippingBanner>
        </Container>
    )
}

export default FreeShipping