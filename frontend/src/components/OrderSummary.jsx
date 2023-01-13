import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    width: 65%;
    background-color: #fff;
`

const Wrapper = styled.div`
    height: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
`

const Sections = styled.div`
    width: 100%;
    border-bottom: 0.1rem solid #e2e2e2;
    padding: 2rem 1rem;
`

const Title = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const TextItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const Text = styled.span`
    font-size: 1.6rem;

`

const BoldText = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
`

const CheckoutBtn = styled.button`
    background-color: #000;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    width: 50%;
    padding: 1rem 0rem;
    border-radius: 0.5rem;
    cursor: pointer;
`


const OrderSummary = () => {
    return (
        <Container>
            <Wrapper>
                <Sections>
                    <Title> Order Summary </Title>
                </Sections>

                <Sections>
                    <TextContainer>
                        <TextItems>
                            <Text> Subtotal </Text>
                            <Text> Shipping </Text>
                            <Text> Tax </Text>
                        </TextItems>

                        <TextItems>
                            <Text> $45.00 </Text>
                            <Text> $5.00 </Text>
                            <Text> $1.67 </Text>
                        </TextItems>
                    </TextContainer>
                </Sections>

                <Sections style={{borderBottom: 'none'}}>
                    <TextContainer>
                        <TextItems>
                            <BoldText> Total </BoldText>
                        </TextItems>

                        <TextItems>
                            <BoldText> $51.67 </BoldText>
                        </TextItems>
                    </TextContainer>
                </Sections>

                <Sections style={{borderBottom: 'none'}}>
                    <CheckoutBtn> Checkout </CheckoutBtn>
                </Sections>
            </Wrapper>
        </Container>
    )
}

export default OrderSummary