
import { ShoppingCart } from "lucide-react";

type NavBarProps = {
  totalCounters: number;
};

const NavBar = ({ totalCounters }: NavBarProps) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand d-flex align-items-center">
        <ShoppingCart />

        <span
          data-test-id="shopping-cart-totalCounter"
          className="badge bg-secondary m-2"
        >
          {totalCounters}
        </span>

        Items
      </div>
    </nav>
  );
};

export default NavBar;

