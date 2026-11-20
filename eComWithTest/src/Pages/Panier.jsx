
import { useDispatch, useSelector } from 'react-redux';

import {
  removeFromCart,
  incrementQte,
  decrementQte
} from '../features/PanierSlice';

const Panier=() =>{
  const dispatch = useDispatch();

  const items = useSelector(state => state.panier.items);

  const total = items.reduce(
    (sum, item) => sum + item.prix * item.qte,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="mb-4">
        <i className="bi bi-cart3 me-2"></i>
        Mon panier
      </h2>

      {items.length === 0 ? (

        <div className="alert alert-info text-center">
          Votre panier est vide !
        </div>

      ) : (

        <>
          <div className="table-responsive">

            <table className="table table-bordered align-middle">

              <thead className="table-dark">
                <tr>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Quantité</th>
                  <th>Sous-total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {items.map(item => (
                  <tr key={item.id}>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.intitule}
                          width="60"
                          height="50"
                          style={{ objectFit: 'cover' }}
                        />
                        {item.intitule}
                      </div>
                    </td>

                    <td>{item.prix} DH</td>

                    <td>
                      <div className="d-flex align-items-center gap-2">

                        <button
                          className="btn btn-outline-secondary btn-sm"
                          /*disabled={item.qte <= 1}*/
                          onClick={() =>
                            dispatch(decrementQte(item.id))
                          }
                        >
                          -
                        </button>

                        <strong>{item.qte}</strong>

                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() =>
                            dispatch(incrementQte(item.id))
                          }
                        >
                          +
                        </button>

                      </div>
                    </td>

                    <td>
                      <strong>
                        {item.prix * item.qte} DH
                      </strong>
                    </td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                      >
                        <i className="bi bi-trash"></i>
                        Supprimer
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-end">

             Total à payer : {total} DH

          </div>
        </>
      )}

    </div>
  );
}

export default Panier;
