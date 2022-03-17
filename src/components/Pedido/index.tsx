import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

import './styles.css';

type PedidoProps = {
    react?: boolean;
    vue?: boolean;
    angular?: boolean;
    quantidade?: string;
    observacoes?: string;
}

export function Pedido(props: PedidoProps) {
    const [pedidos, setPedidos] = useState<PedidoProps>();

    useEffect(() => {
        function fetchData() {
            setPedidos(props);
        }
        fetchData();
    }, []);
    return (
        <Card border="primary" className="card-pedido">
            <Card.Header>Pedido</Card.Header>
            <Card.Body>
                <Card.Title>Informações do pedido</Card.Title>
                <Card.Text>
                    <p><strong>React: {props.react ? 'Sim' : 'Não'}</strong></p>
                    <p><strong>Vue: {props.vue ? 'Sim' : 'Não'}</strong></p>
                    <p><strong>Angular: {props.angular ? 'Sim' : 'Não'}</strong></p>
                    <p><strong>Quantidade de cada: {props.quantidade}</strong></p>
                    <p><strong>Observações: {props.observacoes}</strong></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}