import { IItem } from "./page";


interface IProps {
    cartItems: IItem[];
    onReset: () => void;
    onIncrement: (cartItem: IItem) => void;
    onDecrement: (cartItem: IItem) => void;
    onDelete: (itemId: number) => void;
    cartItem: IItem;
}

const CartItem: React.FC<IProps> = (props) => {
    return (
        <div>
            <div className="justify-center text-2xl mb-4">
                <div>
                    <span
                        className={`w-[60px] text-2xl mb-4 ${props.cartItem.value === 0 ? " warning" : " primary"
                            }`}
                    >

                        {props.cartItem.value}
                    </span>
                </div>
                <div>
                    <button
                        onClick={() => props.onIncrement(props.cartItem)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                    <button
                        onClick={() => props.onDecrement(props.cartItem)}
                        disabled={props.cartItem.value === 0 ? true : false}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => props.onDelete(props.cartItem.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
