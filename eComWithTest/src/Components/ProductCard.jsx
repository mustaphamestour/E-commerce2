
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../features/PanierSlice';
import { deleteProduit } from '../features/ProductSlice';

const ProductCard=({ produit })=>{
  const dispatch = useDispatch();

  return (
    <div className="card h-100">

      <img
        src={produit.image || 'random Url '}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'cover' }}
        alt={produit.intitule}
      />

      <div className="card-body d-flex flex-column">

        <span className="badge bg-secondary align-self-start mb-2">
          {produit.categorie}
        </span>

        <h5>{produit.intitule}</h5>

        <h5 className="text-primary">
          {produit.prix} DH
        </h5>

        <div className="mt-auto d-flex gap-2 flex-wrap">

          <button
            className="btn btn-primary btn-sm"
            onClick={() => dispatch(addToCart(produit))}
          >
            <i className="bi bi-cart-plus"></i>
            Ajouter
          </button>

          <Link
            to={`/products/${produit.id}/edit`}
            className="btn btn-warning btn-sm"
          >
            <i className="bi bi-pencil"></i>
            Edit
          </Link>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              if (window.confirm('Voulez-vous supprimer ce produit ?')) {
                dispatch(deleteProduit(produit.id));
              }
            }}
          >
            <i className="bi bi-trash"></i>
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
