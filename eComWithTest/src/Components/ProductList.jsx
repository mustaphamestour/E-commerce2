
import { useDispatch, useSelector } from 'react-redux';

import { setSearchTerm } from '../features/ProductSlice';

import ProductCard from './ProductCard';

const Listproduits = () => {
  const dispatch = useDispatch();

  // Récupérer les produits
  const produits = useSelector(
    state => state.product.produits
  );

  // Récupérer la catégorie sélectionnée
  const selectedCategory = useSelector(
    state => state.product.selectedCategory
  );

  // Récupérer le mot recherché
  const searchTerm = useSelector(
    state => state.product.searchTerm
  );

const produitsFiltres = produits.filter(p => p.intitule.toLowerCase().includes(searchTerm.toLowerCase()))
                               .filter(p => selectedCategory === 'Toutes' || p.categorie === selectedCategory);

  return (
    <div>

      {/* Barre de recherche */}
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={e =>
            dispatch(setSearchTerm(e.target.value))
          }
        />
      </div>

      {/* Affichage des produits filtrés */}
      <div className="row g-4">

        {produitsFiltres.length > 0 ? (

          produitsFiltres.map(p => (
            <div className="col-md-6 col-lg-4" key={p.id}>
              <ProductCard produit={p} />
            </div>
          ))

        ) : (

          <div className="col-12 text-center py-5">
            <h5 className="text-muted">
              Aucun produit trouvé !
            </h5>
          </div>

        )}

      </div>
    </div>
  );
};

export default Listproduits;
