import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: string }
    | { type: 'CLEAR_CART' }
    | { type: 'SET_CART_ITEMS'; payload: CartItem[] };
const initialState: CartState = {
    items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: action.payload.quantity } // Cập nhật số lượng từ payload
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, price: Number(action.payload.price) }] // Chuyển đổi price sang số
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case 'CLEAR_CART':
            return { ...state, items: [] };

        case 'SET_CART_ITEMS':
            return { ...state, items: action.payload };

        default:
            return state;
    }
};

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);


    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/api/cart');
                const data = response.data.map((item: CartItem) => ({
                    ...item,
                    price: Number(item.price),
                }));
                dispatch({ type: 'SET_CART_ITEMS', payload: data });
            } catch (error) {
                console.error('Failed to fetch cart items:', error);
            }
        };
        fetchCartItems();
    }, []);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const { state, dispatch } = useContext(CartContext);
    const getTotalQuantity = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    };

    return { state, dispatch, getTotalQuantity };
};