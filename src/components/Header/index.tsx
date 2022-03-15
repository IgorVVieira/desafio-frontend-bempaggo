import packageImg from '../../../public/images/package.png';

import { Container, Row, Col, Navbar } from 'react-bootstrap';

import './styles.css';

export function Header() {
    return (
        <Navbar expand='lg' id='navbar'>
            <Container>
                <Row>
                    <Col xs md lg="6">
                        <h1 className='title'>Formulário</h1>
                        <h1 className='title'>para compra de</h1>
                        <h1 className='title strong'>Pacote de adesivos</h1></Col>
                    <Col xs md lg="6">
                        <img src={packageImg} alt="Pacakage" />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}