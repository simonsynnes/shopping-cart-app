import CartItem from './cartItem';
import { IItem } from './page';

interface IProps {
  cartItems: any;
  onReset: () => void;
  onIncrement: (item: IItem) => void;
  onDecrement: (item: IItem) => void;
  onDelete: (itemId: number) => void;
}

const CartItems: React.FC<IProps> = (props) => {
  return (
    <div>
      <div className="justify-center text-2xl mb-4 flex">
        <button
          className="ml-[10.5rem] mb-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={props.onReset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      {props.cartItems.map((item: IItem) => (
        <CartItem
          key={item.id}
          cartItem={item}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
          onReset={props.onReset}
          cartItems={props.cartItems}
        />
      ))}
    </div>
  );
};

export default CartItems;
