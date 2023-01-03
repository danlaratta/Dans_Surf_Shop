import styled from 'styled-components/macro'
import Img from '../assets/footerLogo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #000;
    margin-top: 10rem;
`

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0rem;
`

const FooterSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoContainer = styled.div`
    width: 100%;
`

const Logo = styled.img`
    max-width: 50%;
`

const SocialContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`

const IconContainer = styled.div`
    color: #fff;
    font-size: 1.6rem;
    padding-right: 2.2rem;
`

const FooterTitle = styled.span`
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
`

const FooterText = styled.span`
    color: #fff;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }
`


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <FooterSection>
                    <div>
                        <LogoContainer>
                            <Logo src={Img} alt="logo" />
                        </LogoContainer>

                        <SocialContainer>
                            <IconContainer> <FaFacebookF/> </IconContainer>
                            <IconContainer> <FaInstagram/> </IconContainer>
                            <IconContainer> <FaTwitter/> </IconContainer>
                        </SocialContainer>
                    </div>
                </FooterSection>

                <FooterSection>
                    <div>
                        <FooterTitle> Support </FooterTitle>
                        
                        <TextContainer>
                            <FooterText> Contact Us </FooterText>
                            <FooterText> Order Status </FooterText>
                            <FooterText> Shipping </FooterText>
                            <FooterText> Returns </FooterText>
                            <FooterText> FAQ </FooterText>
                        </TextContainer>
                    </div>
                </FooterSection>

                <FooterSection>
                    <div>
                        <FooterTitle> Info </FooterTitle>
                        
                        <TextContainer>
                            <FooterText> Privacy Policy </FooterText>
                            <FooterText> Terms of Service </FooterText>
                            <FooterText> About Us </FooterText>
                            <FooterText> Careers </FooterText>
                            <FooterText> Store Locator </FooterText>
                        </TextContainer>
                    </div>
                </FooterSection>

            </Wrapper>
        </Container>
    )
}

export default Footer