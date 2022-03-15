type PedidoProps = {
    react?: string;
    vue?: string;
    angular?: string;
    quantidade?: number;
    observacoes?: string;
}

export function Pedido(props: PedidoProps) {
    <>
        <div>
            <h2>React: {props.react}</h2>
            <h2>Vue: {props.vue}</h2>
            <h2>Angular: {props.angular}</h2>
            <h2>Quantidade: {props.quantidade}</h2>
            <h2>Observações: {props.observacoes}</h2>
        </div>
    </>
}