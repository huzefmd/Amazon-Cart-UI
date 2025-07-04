import { create } from "zustand";
export const useCartItemStore = create((set, get) => ({
  cartItems: [
    // {
    //   id: 1,
    //   name: "Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported",
    //   price: 2290.0,
    //   image: "https://m.media-amazon.com/images/I/41EckzKo9lL._SS220_.jpg",
    //   rating: 4.5,
    //   quantity: 1,
    //   reviews: 5261,
    //   oldPrice: 2790.0,
    // },
    // {
    //   id: 2,
    //   name: "USB-C Adapter",
    //   price: 289.0,
    //   image: "https://m.media-amazon.com/images/I/31cqa17L5VL._SS220_.jpg",
    //   rating: 4,
    //   reviews: 1000,
    //   oldPrice: 350.0,
    //   quantity: 1,
    // },
  ],

  additem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),

  // updateQuantity: (id, quantity) =>
  //   set((state) => ({
  //     cartItems: state.cartItems.map((item) =>
  //       item.id === id ? { ...item, quantity } : item
  //     ),
  //   })),

  updateQuantity: (id, quantity, itemData) =>
    set((state) => {
      const exists = state.cartItems.find((i) => i.id === id);

      if (exists) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...itemData, quantity }],
        };
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  gettotalPrice: () => {
    const items = get().cartItems;
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
