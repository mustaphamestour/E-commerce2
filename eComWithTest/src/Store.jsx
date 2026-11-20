import { configureStore } from "@reduxjs/toolkit"
import PanierReducer from './features/PanierSlice'
import ProductReducer from './features/ProductSlice'


const Store=configureStore(
    {
    reducer:{
        panier:PanierReducer,
        product:ProductReducer

    }
}
);
export default Store;


/*
structure du store 
{
    panier:{items:[]},

    product:{produits: [
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
  selectedCategory: 'Toutes'}
}*/