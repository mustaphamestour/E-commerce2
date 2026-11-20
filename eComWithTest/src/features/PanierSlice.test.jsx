
import PanierReducer, {
  addToCart,
  removeFromCart,
  incrementQte,
  decrementQte
} from './PanierSlice';

import store from '../Store';

// Récupérer le state initial du panier depuis le store
const initialState = store.panier.items;

describe('Tests unitaires PanierSlice', () => {




  it('doit ajouter un produit au panier', () => {
    const produit = {
      id: 1,
      intitule: 'Ordinateur portable',
      prix: 7500,
      categorie: 'Informatique'
    };

    const newState = PanierReducer(
      initialState,
      addToCart(produit)
    );

    expect(newState.panier.items).toHaveLength(1);

    expect(newState.panier.items[0]).toEqual({
      ...produit,
      qte: 1
    });
  });


  it('doit incrémenter la quantité si le produit existe déjà', () => {
   const produit = {
      id: 1,
      intitule: 'Ordinateur portable',
      prix: 7500,
      categorie: 'Informatique'
    };

    let newState = PanierReducer(
      initialState,
      addToCart(produit)
    );
     newState = PanierReducer(
      initialState,
      incrementQte(1)
    );
  
    expect(newState.panier.items[0].qte).toBe(2);
  });


  it('doit supprimer un produit du panier', () => {
    const stateWithProducts = {
      items: [
        { id: 1, intitule: 'Ordinateur', qte: 1 },
        { id: 2, intitule: 'Smartphone', qte: 2 }
      ]
    };

    const newState = PanierReducer(
      stateWithProducts,
      removeFromCart(1)
    );

    expect(newState.panier.items).toHaveLength(1);
    expect(newState.panier.items[0].id).toBe(2);
  });


  it('doit incrémenter la quantité d\'un produit', () => {
    const stateWithProduct = {
      items: [
        { id: 1, intitule: 'Ordinateur', qte: 1 }
      ]
    };

    const newState = PanierReducer(
      stateWithProduct,
      incrementQte(1)
    );

    expect(newState.panier.items[0].qte).toBe(2);
  });


  it('doit décrémenter la quantité d\'un produit', () => {
    const stateWithProduct = {
      items: [
        { id: 1, intitule: 'Ordinateur', qte: 2 }
      ]
    };

    const newState = PanierReducer(
      stateWithProduct,
      decrementQte(1)
    );

    expect(newState.panier.items[0].qte).toBe(1);
  });

  // 7. Tester decrementQte avec quantité égale à 1
  it('doit supprimer le produit si sa quantité atteint zéro', () => {
    const stateWithProduct = {
      items: [
        { id: 1, intitule: 'Ordinateur', qte: 1 }
      ]
    };

    const newState = PanierReducer(
      stateWithProduct,
      decrementQte(1)
    );

    expect(newState.panier.items).toHaveLength(0);
  });


});
