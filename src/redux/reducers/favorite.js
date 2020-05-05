const initialState = {
    products: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            {
                console.log('aaaaaaaaaa', action.payload);
                const newState = {...state, products: [...state.products, action.payload.product]};
                return newState;
            }
        case 'REMOVE_FROM_FAVORITE':
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        default:
            return state;
    }
}

