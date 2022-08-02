import { useDispatch } from 'react-redux'
import classes from './CartButton.module.css';
import { CartActions } from '../Store/CartStore';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const showCartHandler = () => {
    dispatch(CartActions.switch())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
