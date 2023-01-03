import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import NavLogo from '../assets/navLogo.png'
import { IoCart } from 'react-icons/io5'

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

const IconContainer = styled.div`
    font-size: 2.5rem;
`


const Navbar = () => {
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
                        <Links to='/men'> Men </Links>
                    </LinkContainer>

                    <LinkContainer>
                        <Links to='/women'> Women </Links>
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
                        <IoCart />
                    </IconContainer>
                </RightSection>
            </Nav>
        </Container>
    )
}

export default Navbar