
import { describe, it, expect } from 'vitest';

import ProductReducer, {
  addProduit,
  updateProduit,
  deleteProduit,
  setSearchTerm,
  setSelectedCategory
} from './ProductSlice';



import store from '../Store';

// Importer le state initial
const initialState = store.getState().product.produits;

describe('Tests unitaires ProductSlice', () => {


  it('doit ajouter un nouveau produit', () => {
    const produit = {
      intitule: 'Tablette',
      prix: 2500,
      categorie: 'Informatique',
      image: 'tablette.jpg'
    };

    const newState = ProductReducer(
      initialState,
      addProduit(produit)
    );

    expect(newState.product.produits.length).toBe(4);
    expect(newState.product.produits[3].intitule).toBe("Tablette");
    expect(newState.product.produits[3].id).toBeDefined();
  });


  it('doit modifier un produit existant', () => {
    const produitModifie = {
      ...initialState.produits[0],
      intitule: 'Ordinateur Gaming',
      prix: 9500
    };

    const newState = ProductReducer(
      initialState,
      updateProduit(produitModifie)
    );

    expect(newState.product.produits[0].intitule).toBe('Ordinateur Gaming');
    expect(newState.product.produits[0].prix).toBe(9500);
  });


  it('doit supprimer un produit', () => {
    const newState = ProductReducer(
      initialState,
      deleteProduit(1)
    );

    expect(newState.product.produits).toHaveLength(2);
    expect(newState.product.produits.find(p => p.id === 1)).toBeUndefined();
  });


  it('doit modifier le terme de recherche', () => {
    const newState = ProductReducer(
      initialState,
      setSearchTerm('Smartphone')
    );

    expect(newState.product.searchTerm).toBe('Smartphone');
  });

  // 6. Tester setSelectedCategory
  it('doit modifier la catégorie sélectionnée', () => {
    const newState = ProductReducer(
      initialState,
      setSelectedCategory('Informatique')
    );

    expect(newState.product.selectedCategory).toBe('Informatique');
  });

});
