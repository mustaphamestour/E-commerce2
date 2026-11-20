
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams,Link } from 'react-router-dom';

import {addProduit, updateProduit} from '../features/ProductSlice';

const ProductForm=() =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const produits = useSelector(
    state => state.product.produits
  );

const categories = ["Toutes","Téléphonie","Accessoires","Livres"];

  const produitExiste = produits.find(
    p => p.id === Number(id)
  );

  const [formData, setFormData] = useState({ intitule: '',prix: '',categorie: '',image: ''});

  useEffect(() => {
    if (id && produitExiste) {
      setFormData({
        intitule: produitExiste.intitule,
        prix: produitExiste.prix,
        categorie: produitExiste.categorie,
        image: produitExiste.image
      });
    }
  }, [id, produitExiste]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const produit = {
      ...formData
    };

    if (id) {
      if (!produitExiste) return;

      dispatch(updateProduit({
        ...produit,
        id: Number(id)
      }));
    } else {
      dispatch(addProduit(produit));
    }

    navigate('/');
  };



  return (
    <div className="container py-5">

      <div className="card shadow mx-auto" style={{ maxWidth: '650px' }}>

        <div className="card-header bg-primary text-white">
          <h4>
            {id ? 'Modifier un produit' : 'Ajouter un produit'}
          </h4>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Intitulé</label>
              <input
                type="text"
                name="intitule"
                className="form-control"
                value={formData.intitule}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Prix (DH)</label>
              <input
                type="number"
                name="prix"
                className="form-control"
                min="0"
                step="0.01"
                value={formData.prix}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Catégorie</label>
              <select className="form-select" name="categorie" value={formData.categorie} onChange={handleChange}>
               
                {
                    categories.map((c,pos)=>
                        <option  value={c} key={pos}>{c}</option>
                    )
                }
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Image (URL)</label>
              <input
                type="url"
                name="image"
                className="form-control"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            {formData.image && (
              <img
                src={formData.image}
                alt="Aperçu"
                style={{
                  width: '150px',
                  height: '120px',
                  objectFit: 'cover'
                }}
                className="mb-3 rounded"
              />
            )}

            <div className="d-flex gap-2">

              <button type="submit" className="btn btn-primary">
                <i className="bi bi-check-circle me-2"></i>
                {id ? 'Modifier' : 'Ajouter'}
              </button>

              <Link
                type="button"
                className="btn btn-secondary"
                to='/'
              >
                Annuler
              </Link>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default ProductForm;
