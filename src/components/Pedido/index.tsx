import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

import './styles.css';

type PedidoProps = {
    react?: string;
    vue?: string;
    angular?: string;
    quantidade?: number;
    observacoes?: string;
}

export function Pedido(props: PedidoProps) {
    const [pedidos, setPedidos] = useState<PedidoProps>();

    useEffect(() => {
        function fetchData() {
            setPedidos(props);
            console.log(pedidos)
        }
        fetchData();
    }, []);
    return (
        <Card border="primary" className="card-pedido">
            <Card.Header>Pedido</Card.Header>
            <Card.Body>
                <Card.Title>Informações do pedido</Card.Title>
                <Card.Text>
                    <p><strong>React: {props.react}</strong></p>
                    <p><strong>Vue: {props.vue}</strong></p>
                    <p><strong>Angular: {props.angular}</strong></p>
                    <p><strong>Quantidade: {props.quantidade}</strong></p>
                    <p><strong>Observações: {props.observacoes}</strong></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}