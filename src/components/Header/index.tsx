import {
  Aside,
  CityContent,
  Container,
  ShoppingCartContent,
} from "./styles.ts";
import logo from "../../assets/img/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />

      <Aside>
        <CityContent>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Rio Branco, AC</span>
        </CityContent>

        <ShoppingCartContent>
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </ShoppingCartContent>
      </Aside>
    </Container>
  );
}
