import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu cho sản phẩm trong giỏ hàng
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

// Định nghĩa kiểu dữ liệu cho trạng thái giỏ hàng
interface CartState {
    items: CartItem[];
}

// Định nghĩa kiểu dữ liệu cho hành động
type CartAction =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: string }
    | { type: 'CLEAR_CART' };

// Khởi tạo trạng thái ban đầu
const initialState: CartState = {
    items: [],
};

// Tạo reducer để xử lý các hành động
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            }
            return { ...state, items: [...state.items, action.payload] };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case 'CLEAR_CART':
            return { ...state, items: [] };

        default:
            return state;
    }
};

// Tạo Context
const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

// Tạo Provider để bọc ứng dụng
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook để sử dụng CartContext
export const useCart = () => {
    const { state, dispatch } = useContext(CartContext);

    // Hàm tính tổng số lượng sản phẩm trong giỏ hàng
    const getTotalQuantity = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    };

    return { state, dispatch, getTotalQuantity };
};