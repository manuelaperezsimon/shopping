export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);

        return newState;
      }

      const newState = [...state, { ...payload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.REMOVE_TO_CART: {
      const { id } = payload;
      const newState = state.filter((payload) => payload.id !== id);
      updateLocalStorage(newState);

      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([]);

      return [];
    }
  }
};
