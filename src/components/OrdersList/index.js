import { Segment } from "semantic-ui-react"
const OrderList = ({orders}) => {
    if (!orders.length) {
        return <Segment>No orders exist, please make some</Segment>
    }

    return (
        <Segment.Group>
            {orders.map(order => (
            <Segment>
                {order.map(orderItem => orderItem.name).join(',')}
            </Segment>
            ))}
        </Segment.Group>
    )        
}

export default OrderList