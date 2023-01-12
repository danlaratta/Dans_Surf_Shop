import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    padding: 1.5rem;
    background-color: #fff;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Sections = styled.div`
    
`

const Title = styled.span`
    
`

const TextContainer = styled.div`
    
`

const LeftText = styled.div`
    
`

const RightText = styled.div`
    
`

const Text = styled.span`
    
`

const BoldText = styled.span`
    
`

const CheckoutBtn = styled.button`
    
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
                        <LeftText>
                            <Text> Subtotal </Text>
                            <Text> Shipping </Text>
                            <Text> Tax </Text>
                        </LeftText>

                        <RightText>
                            <Text> $45.00 </Text>
                            <Text> $5.00 </Text>
                            <Text> $1.67 </Text>
                        </RightText>
                    </TextContainer>
                </Sections>

                <Sections>
                    <TextContainer>
                        <LeftText>
                            <BoldText> Total </BoldText>
                        </LeftText>

                        <RightText>
                            <BoldText> $51.67 </BoldText>
                        </RightText>
                    </TextContainer>
                </Sections>

                <Sections>
                    <CheckoutBtn> Checkout </CheckoutBtn>
                </Sections>
            </Wrapper>
        </Container>
    )
}

export default OrderSummary