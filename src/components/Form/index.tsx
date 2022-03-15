import { useState, useEffect } from 'react';
import { Form as FormBootstrap, Button, Container, Row, Col } from 'react-bootstrap';
import { Pedido } from '../Pedido';

import './styles.css';

export function Form() {
    const [react, setReact] = useState(false);
    const [vue, setVue] = useState(false);
    const [angular, setAngular] = useState(false);
    const [quantidade, setQuntidade] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const [pedidos, setPedidos] = useState<object[]>([]);

    async function handleRegister(e) {
        e.preventDefault();

        const novoPedido = {
            'react': react,
            'vue': vue,
            'angular': angular,
            'quantidade': quantidade,
            'observacoes': observacoes,
        };

        setPedidos([...pedidos, novoPedido]);
    }

    return (
        <Container>
            <Row>
                <Col xs md lg="6">
                    <FormBootstrap onSubmit={handleRegister}>
                        <p className='text-strong'>Quais adesivos:</p>
                        <FormBootstrap.Group>
                            <FormBootstrap.Check type='checkbox' name='react' id='react' label='React'
                                onChange={(e) => setReact(e.target.checked)} />
                        </FormBootstrap.Group>

                        <FormBootstrap.Group>
                            <FormBootstrap.Check type='checkbox' name='vue' id='vue' label='Vue'
                                onChange={(e) => setVue(e.target.checked)} />
                        </FormBootstrap.Group>

                        <FormBootstrap.Group>
                            <FormBootstrap.Check type='checkbox' name='angular' id='angular' label='Angular'
                                onChange={(e) => setAngular(e.target.checked)} />
                        </FormBootstrap.Group>

                        <FormBootstrap.Group>
                            <FormBootstrap.Label htmlFor='quantidade' className='text-strong'>Quantos adesivos de cada?</FormBootstrap.Label>
                            <FormBootstrap.Control type='number' name='quantidade' id='quantidade' value={quantidade}
                                onChange={(e) => setQuntidade(e.target.value)}
                            />
                        </FormBootstrap.Group>

                        <FormBootstrap.Group>
                            <FormBootstrap.Label htmlFor='observacoes' className='text-strong'>Observações:</FormBootstrap.Label>
                            <FormBootstrap.Control as='textarea' rows={5} placeholder='Alguma dúvida? Recado?' name='observacoes' id='observacoes' value={observacoes}
                                onChange={(e) => setObservacoes(e.target.value)} />
                        </FormBootstrap.Group>

                        <FormBootstrap.Group controlId='formButton'>
                            <Button type="submit">Enviar</Button>
                        </FormBootstrap.Group>
                    </FormBootstrap>
                </Col>
            </Row>

            <Row>
                {pedidos.map(pedido => {
                    return <Col xs md lg="3" className='m-3'>
                        <Pedido {...pedido} />
                    </Col>
                })}
            </Row>
        </Container>
    );
}