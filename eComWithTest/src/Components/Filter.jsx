
import { useDispatch, useSelector } from 'react-redux';

import {
  setSelectedCategory
} from '../features/ProductSlice';

const Filter=()=>{
  const dispatch = useDispatch();
  const products=useSelector(state=>state.product.produits)

  const categories = [...new Set(products.map(p=>p.categorie))];

 const selectedCategory=useSelector(state=>state.product.selectedCategory)

  return (
    <div className="card  p-3">

      <h5 className="mb-3">
        Catégories
      </h5>
       <div className="form-check mb-2">

          <input
            className="form-check-input"
            type="radio"
            name="categorie"
       
            value="Toutes"
            checked={selectedCategory === "Toutes"}
            onChange={() =>
              dispatch(setSelectedCategory("Toutes"))
            }
          />

          <label className="form-check-label" >
           Toutes
          </label>

        </div>

      {categories.map((cat, index) => (
        <div className="form-check mb-2" key={cat}>

          <input
            className="form-check-input"
            type="radio"
            name="categorie"
            id={`cat${index}`}
            value={cat}
            checked={selectedCategory === cat}
            onChange={() =>
              dispatch(setSelectedCategory(cat))
            }
          />

          <label className="form-check-label" htmlFor={`cat${index}`}>
            {cat}
          </label>

        </div>
      ))}

    </div>
  );
}

export default Filter;
