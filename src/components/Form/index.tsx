import React, { useState } from 'react';
import { Form as FormBootstrap, Button, Container, Row, Col } from 'react-bootstrap';
import { Pedido } from '../Pedido';

import './styles.css';

type PropsForm = {
    onSubmit?: Function;
}

export function Form(props: PropsForm) {
    const [react, setReact] = useState(false);
    const [vue, setVue] = useState(false);
    const [angular, setAngular] = useState(false);
    const [quantidade, setQuntidade] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const [pedidos, setPedidos] = useState<object[]>([]);

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const novoPedido = {
                'react': react,
                'vue': vue,
                'angular': angular,
                'quantidade': quantidade,
                'observacoes': observacoes,
            };

            setPedidos([...pedidos, novoPedido]);

            if (props.onSubmit) {
                props.onSubmit({
                    quantidade,
                    observacoes,
                });
            }
        } catch (error) {
            console.log(error);
        }
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
                            <FormBootstrap.Control type='number' name='quantidade' id='quantidade' value={quantidade} required
                                onChange={(e) => setQuntidade(e.target.value)}
                            />
                        </FormBootstrap.Group>

                        <FormBootstrap.Group>
                            <FormBootstrap.Label htmlFor='observacoes' className='text-strong'>Observações:</FormBootstrap.Label>
                            <FormBootstrap.Control as='textarea' required rows={5} placeholder='Alguma dúvida? Recado?' name='observacoes' id='observacoes' value={observacoes}
                                onChange={(e) => setObservacoes(e.target.value)} />
                        </FormBootstrap.Group>

                        <FormBootstrap.Group controlId='formButton' className='mt-3'>
                            <Button type="submit">Enviar</Button>
                        </FormBootstrap.Group>
                    </FormBootstrap>
                </Col>
            </Row>

            <Row>
                {pedidos.map((pedido, index) => {
                    return <Col xs md lg="3" className='m-3' key={index}>
                        <Pedido {...pedido} />
                    </Col>
                })}
            </Row>
        </Container>
    );
}