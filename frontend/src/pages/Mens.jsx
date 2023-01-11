import styled from 'styled-components/macro'
import FreeShipping from '../components/FreeShipping'
import Products from '../components/Products'

const Container = styled.div`
    width: 100%;
    padding-top: 1.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Mens = () => {
    return (
        <Container>
            <FreeShipping />

            <Products />
        </Container>
    )
}

export default Mens