import React from 'react'
import styled from 'styled-components/macro'
import img from '../assets/test.jpeg'
import { IoClose } from 'react-icons/io5'

const Container = styled.div`
    width: 50%;
    padding: 1.5rem;
    background-color: #fff;
`

const Wrapper = styled.div`
    display: flex;
`

const LeftSection = styled.div`
    flex: 3;
    display: flex;
`

const Image = styled.img`
    width: 100%;
`

const RightSection = styled.div`
    flex: 9;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`

const LeftTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 3rem; */
`

const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 500;
    width: 85%;
`

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
`

const Colors = styled.div`
    background-color: ${(props) => props.color};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.15rem solid #000;
`

const SubTitle = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
    padding-right: 0.5rem;
`

const SizeContainer = styled.span`

`

const Text = styled.span`
    font-size: 1.4rem;
`

const Quantity = styled.div`
    display: flex;
`

const QtySelect = styled.select`
    border: none;
    padding-top: 0.1rem;

    &:hover {
        cursor: pointer;
    }

`



const RightTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Price = styled.span`
    font-size: 1.8rem;
    font-weight: 500;
`

const RemoveIcon = styled.div`
    font-size: 2.2rem;
    display: flex;
    justify-content: flex-end;

    &:hover {
        cursor: pointer;
        color: #ce0101;
        transform: scale(1.1);
    }
`

const CartCard = () => {
    return (
        <Container>
            <Wrapper> 
                <LeftSection>
                    <Image src={img} />
                </LeftSection>

                <RightSection>
                    <LeftTextContainer>
                        <Title> Mens Casual Premium Slim Fit T-Shirts </Title>

                        <ColorContainer>
                            <SubTitle> Color: </SubTitle>
                            <Colors color="#517daa" />
                            {/* <Text> Navy </Text> */}
                        </ColorContainer>

                        <SizeContainer>
                            <SubTitle> Size: </SubTitle>
                            <Text> Large </Text>
                        </SizeContainer>

                        <Quantity> 
                            <SubTitle> Qty: </SubTitle>
                            <QtySelect>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                            </QtySelect>
                        </Quantity>
                    </LeftTextContainer>

                    <RightTextContainer>
                        <RemoveIcon> <IoClose /> </RemoveIcon>
                        <Price> $30 </Price>
                    </RightTextContainer>
                </RightSection>
            </Wrapper>
        </Container>
    )
}

export default CartCard