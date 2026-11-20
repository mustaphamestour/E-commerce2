import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const PanierSlice = createSlice({
  name: 'panier',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const produit = action.payload;

      const existingItem = state.items.find(
        item => item.id === produit.id
      );

      if (existingItem) {
        existingItem.qte += 1;
      } else {
        state.items.push({...produit,qte: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    incrementQte: (state, action) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item) {item.qte += 1;}
    },

    decrementQte: (state, action) => {
       state.items=state.items.map((p,pos)=>p.id===action.payload?{...p,qte:p.qte-=1}:p).filter(p=>p.qte>0);

       /*
    const item = state.items.find(p => p.id === action.payload);
      if (item) {item.qte -= 1;}
      state.items=state.items.filter(p=>p.qte>0);


       */
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementQte,
  decrementQte
} = PanierSlice.actions;

export default PanierSlice.reducer;