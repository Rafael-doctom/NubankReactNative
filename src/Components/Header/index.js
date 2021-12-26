import { Container, Top, Logo, Title } from "./styles"

import LogoImg from '../../../assets/Nubank_Logo@3x.png'

import { Icon } from 'react-native-elements';

const Header = () => {
    return (
        <>
            <Container>
                <Top>
                    <Logo source={LogoImg} width={50} alt="iamgem aqui"/>
                    <Title>
                        Diego
                    </Title>
                </Top>
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />

            </Container>
        </>
    )
}

export default Header