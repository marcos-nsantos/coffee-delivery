import {
  Aside,
  CityContent,
  Container,
  ShoppingCartContent,
} from "./styles.ts";
import logo from "../../assets/img/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link to="/" title="Coffee Delivery">
        <img src={logo} alt="" />
      </Link>

      <Aside>
        <CityContent>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Rio Branco, AC</span>
        </CityContent>

        <ShoppingCartContent>
          <Link to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </Link>
        </ShoppingCartContent>
      </Aside>
    </Container>
  );
}
