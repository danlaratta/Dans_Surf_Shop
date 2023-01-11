import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    width: 100%;
    border-bottom: 0.1rem dashed gray;
`

const Wrapper = styled.div`
    
`

const CardSection = styled.div`
    
`

const Image = styled.img`
    
`

const TextContainer = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
        "title   qty   nav"
        "color   .          remove"
        "size    .          .";
    text-align: center;
    grid-gap: 0.25rem;
`

const Title = styled.span`
    grid-area: title;
`

const Quantity = styled.div`
    display: flex;
    grid-area: qty;
`

const Label = styled.label`
    
`

const QtySelect = styled.select`
    
`

const ColorContainer = styled.div`
    display: flex;
    grid-area: color;
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

const Remove = styled.span`
    grid-area: remove;
`

const SizeContainer = styled.span`
    grid-area: size;
`

const Size = styled.span`
`

const CartCard = () => {
    return (
        <Container>
            <Wrapper> 
                <CardSection>
                    <Image src="" />
                </CardSection>

                <CardSection>
                    <TextContainer>
                        <Title> Mens Casual Premium Slim Fit T-Shirts </Title>

                        <Quantity> 
                            <Label> QTY: </Label>
                            <QtySelect>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                            </QtySelect>
                        </Quantity>

                        <ColorContainer>
                            <Label> COLOR: </Label>
                            <Colors color='#000' />
                        </ColorContainer>

                        <Remove>  REMOVE </Remove>

                        <SizeContainer>
                            <Label> SIZE: </Label>
                            <Size> L </Size>
                        </SizeContainer>
                    </TextContainer>
                </CardSection>
            </Wrapper>
        </Container>
    )
}

export default CartCard