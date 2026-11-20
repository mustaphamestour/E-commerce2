import { createSlice} from '@reduxjs/toolkit';

export const initialState = {
  produits: [
    {
      id: 1,
      intitule: 'Ordinateur portable',
      prix: 7500,
      categorie: 'Informatique',
      image: 'https://placehold.co/400x250?text=Ordinateur'
    },
    {
      id: 2,
      intitule: 'Smartphone',
      prix: 3500,
      categorie: 'Téléphonie',
      image: 'https://placehold.co/400x250?text=Smartphone'
    },
    {
      id: 3,
      intitule: 'Casque audio',
      prix: 450,
      categorie: 'Accessoires',
      image: 'https://placehold.co/400x250?text=Casque'
    }
  ],
  searchTerm: '',
  selectedCategory: 'Toutes'
};

const ProductSlice = createSlice({
  name: 'produits',
  initialState:initialState,

  reducers: {
    addProduit: (state, action) => {
      state.produits.push({ ...action.payload, id:nanoid()
      });
    },

    updateProduit: (state, action) => {
      const index = state.produits.findIndex(p => p.id === action.payload.id);

      if (index !== -1) {
        state.produits[index] = action.payload;

      }
    },

    deleteProduit: (state, action) => {
      state.produits = state.produits.filter(p => p.id !== action.payload);
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const {
  addProduit,
  updateProduit,
  deleteProduit,
  setSearchTerm,
  setSelectedCategory
} = ProductSlice.actions;


export default ProductSlice.reducer;