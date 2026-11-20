
import Filter from '../Components/Filter';
import Listproduits from '../Components/ProductList';

const Home=()=>{
  return (
    <div className="container py-4">

      <h2 className="fw-bold mb-4">
        Notre boutique
      </h2>

      <div className="row g-4">

        {/* Filtre : 25% */}
        <div className="col-md-3">
          <Filter />
        </div>

        {/* Liste produits : 75% */}
        <div className="col-md-9">
          <Listproduits />
        </div>

      </div>
    </div>
  );
}

export default Home;
