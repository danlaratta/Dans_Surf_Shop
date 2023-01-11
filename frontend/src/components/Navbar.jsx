import { useContext } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import NavLogo from '../assets/navLogo.png'
import { IoCartOutline } from 'react-icons/io5'
import CartContext from '../context/CartContext'

const Container = styled.div`
    width: 100%;
    position: fixed;
    background-color: #fff;
    box-shadow: 0rem 0.2rem 0.8rem #565656;
    z-index: 10;
`

const Nav = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 2rem;
`

const LeftSection = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const LogoContainer = styled(Link)`
    width: 100%;
`

const Logo = styled.img`
    max-width: 10%;
`

const NavbarSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 12rem;

`

const LinkContainer = styled.div``

const Links = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    color: #000;
`

const RightSection = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const IconContainer = styled.div``

const CheckoutLink = styled(Link)`
    text-decoration: none;
    font-size: 3rem;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AmountContainer = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.3rem;
    background-color: #000;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AmountText = styled.span`
    color: #fff;
    font-size: 1.3rem;
    font-weight: 400;
`


const Navbar = () => {

    const {cartItems} = useContext(CartContext)

    return (
        <Container>
            <Nav>
                <LeftSection>
                    <LogoContainer to='/'>
                            <Logo src={NavLogo} />
                    </LogoContainer>
                </LeftSection>

                <NavbarSection>
                    <LinkContainer>
                        <Links to='/mens'> Men </Links>
                    </LinkContainer>

                    <LinkContainer>
                        <Links to='/womens'> Women </Links>
                    </LinkContainer>

                    <LinkContainer>
                        <Links to='/accessories'> Accessories </Links>
                            
                    </LinkContainer>

                    <LinkContainer>
                        <Links to='/sale' > Sale </Links>
                    </LinkContainer>   
                </NavbarSection>

                <RightSection>
                    <IconContainer>
                        <CheckoutLink to='/checkout'>
                            <IoCartOutline />
                            
                            <AmountContainer>
                                <AmountText> {cartItems.length} </AmountText>
                            </AmountContainer>
                        </CheckoutLink>
                    </IconContainer>
                </RightSection>
            </Nav>
        </Container>
    )
}

export default Navbar