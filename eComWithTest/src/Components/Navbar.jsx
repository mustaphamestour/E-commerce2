
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar=()=>{
  const items = useSelector(state => state.panier.items);



  return (
    <nav className="navbar  navbar-dark bg-dark">
      <div className="container">

        <Link to="/" className="navbar-brand fw-bold">
          <i className="bi bi-shop me-2"></i>
          MyShop
        </Link>

          <div className="navbar-nav ms-auto d-flex flex-row gap-3 ">

            <NavLink to="/" className="nav-link">
              Produits
            </NavLink>

            <NavLink to="/products/new" className="nav-link">
              Ajouter-produit
            </NavLink>

            <NavLink to="/panier" className="nav-link">
              <i className="bi bi-cart3"></i> Panier
              <span className="badge bg-danger ms-2">
                {items.length}
              </span>
            </NavLink>

          </div>
        </div>
    
    </nav>
  );
}

export default Navbar;
