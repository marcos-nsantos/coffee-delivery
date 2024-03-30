import {
  AddressForm,
  Container,
  FormContainer,
  Heading,
  InfoContainer,
  PaymentOptions,
} from "./style.ts";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { TextInput } from "./components/TextInput";
import { useTheme } from "styled-components";
import { PaymentOption } from "./components/PaymentOption";

export function Checkout() {
  const theme = useTheme();

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form>
          <FormContainer>
            <Heading>
              <MapPin size={22} weight="fill" color={theme["yellow-dark"]} />

              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </Heading>

            <AddressForm>
              <TextInput type="text" placeholder="CEP" gridArea="cep" />
              <TextInput type="text" placeholder="Rua" gridArea="rua" />
              <TextInput type="text" placeholder="Número" gridArea="numero" />
              <TextInput
                type="text"
                placeholder="Complemento"
                gridArea="complemento"
              />
              <TextInput type="text" placeholder="Bairro" gridArea="bairro" />
              <TextInput type="text" placeholder="Cidade" gridArea="cidade" />
              <TextInput type="text" placeholder="UF" gridArea="uf" />
            </AddressForm>
          </FormContainer>

          <FormContainer>
            <Heading>
              <CurrencyDollar size={22} color={theme["purple"]} />
              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Heading>

            <PaymentOptions>
              <PaymentOptions>
                <PaymentOption value="credit" selected={true}>
                  <CreditCard size={16} color={theme["purple"]} />
                  <span>Cartão de Crédito</span>
                </PaymentOption>

                <PaymentOption value="debit" selected={false}>
                  <Bank size={16} color={theme["purple"]} />
                  <span>Cartão de Débito</span>
                </PaymentOption>

                <PaymentOption value="money" selected={false}>
                  <Money size={16} color={theme["purple"]} />
                  <span>Dinheiro</span>
                </PaymentOption>
              </PaymentOptions>
            </PaymentOptions>
          </FormContainer>
        </form>
      </InfoContainer>
    </Container>
  );
}
