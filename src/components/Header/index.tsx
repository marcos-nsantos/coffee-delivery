import { Aside, CityContent, Container } from "./styles.ts";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import logo from "../../assets/img/logo.svg";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeProvider.tsx";

export function Header() {
  const theme = useTheme();
  const { quantity } = useContext(CoffeeContext);

  return (
    <Container>
      <Link to="/" title="Coffee Delivery">
        <img src={logo} alt="" />
      </Link>

      <Aside>
        <CityContent>
          <MapPin size={22} weight="fill" color={theme["purple"]} />
          <span>Rio Branco, AC</span>
        </CityContent>

        <Link to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" color={theme["yellow-dark"]} />
          <span>{quantity}</span>
        </Link>
      </Aside>
    </Container>
  );
}
