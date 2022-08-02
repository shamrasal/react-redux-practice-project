import { useDispatch, useSelector } from 'react-redux'
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { CartItemActions } from '../Store/CartItems';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.CartItem.items)
  console.log(items)
  const { title, price, description } = props;

  const addCartHandler = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      description: props.description,
      quantity: 1,
      totalPrice: props.price
    }
    dispatch(CartItemActions.addItemToCart(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
