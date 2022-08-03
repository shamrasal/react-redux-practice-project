import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { CartActions } from './components/Store/CartStore';
import { CartItemActions } from './components/Store/CartItems'
let isInitial = true

function App() {
  const dispatch = useDispatch()
  const cartVisible = useSelector(state => state.cart.cartIsvisible)
  const notification = useSelector(state => state.cart.Notification)
  const cart = useSelector(state => state.CartItem)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(CartActions.ShowNotification({
        status: 'pending',
        title: 'sending...',
        message: 'sending cart data !'
      }))
      const response = await fetch('https://general-26038-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })

      if (!response.ok) {
        throw new Error('something went wrong...!')
      }

      dispatch(CartActions.ShowNotification({
        status: 'success',
        title: 'success !',
        message: 'sent cart data succesfully !'
      }))
    }

    if (isInitial) {
      const getCartData = async () => {
        const response = await fetch('https://general-26038-default-rtdb.firebaseio.com/cart.json', {
          method: 'GET',
        })

        if (!response.ok) {
          throw new Error('something went wrong...!')
        }

        const responseData = await response.json()

        dispatch(CartItemActions.replace({
          items: responseData.items || [],
          totalQuantit: responseData.totalQuantit || 0
        }))
      }
      getCartData().catch(err => {
        console.log(err)
      })
      isInitial = false
      return
    }

    if (cart.updateCart) {
      sendCartData().catch(error => {
        dispatch(CartActions.ShowNotification({
          status: 'error',
          title: 'ERROR !',
          message: 'sent cart data failed !'
        }))

      })

    }

  }, [cart, dispatch])
  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}>
        </Notification>}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
