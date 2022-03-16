import { useState } from 'react'
import { Container } from 'semantic-ui-react'

import NewOrderGenerator from './components/NewOrderGenerator'
import OrderList from './components/OrdersList'

import './App.css'

function App() {
  const [orders, setOrders] = useState([])
  const handelAddOrder = (order) => {
    setOrders([...orders, order])
  }
  return (<Container>
    <NewOrderGenerator onCreateOrder={handelAddOrder} />
    <OrderList orders={orders} />
  </Container>)
}

export default App
