import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import {ReactComponent as FnlLogo} from '../../assets/ferre-newlink-logo.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <FnlLogo className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
              Tienda
            </Link>
            {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>Cerrar Sesión</span>
              ) : (
                <Link className="nav-link" to='/auth'>
                   Iniciar Sesión
                </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;