import { useDispatch } from 'react-redux'
import classes from './CartItem.module.css';
import { CartItemActions } from '../Store/CartItems';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price } = props.item;

  const additemHandler = () => {
    dispatch(CartItemActions.addItemToCart(props.item))
  }

  const removeitemHandler = () => {
    dispatch(CartItemActions.removeFromCart(props.item.id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeitemHandler}>-</button>
          <button onClick={additemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
