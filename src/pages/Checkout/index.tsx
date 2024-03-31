import {
  AddressForm,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
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
  Trash,
} from "@phosphor-icons/react";
import { TextInput } from "./components/TextInput";
import { useTheme } from "styled-components";
import { PaymentOption } from "./components/PaymentOption";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeProvider.tsx";
import { QuantityInput } from "../../components/QuantityInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const theme = useTheme();
  const { cart, incrementCoffee, decrementCoffee, removeCoffee } =
    useContext(CoffeeContext);

  function getTotalPrice() {
    let total = 0;

    cart.forEach((coffee) => {
      total += coffee.price * coffee.quantity;
    });

    return total;
  }

  const selectedPaymentMethod = watch("paymentMethod");
  console.log(selectedPaymentMethod);

  function onSubmit(data: FormInputs) {
    console.log(data);
  }

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form onSubmit={handleSubmit(onSubmit)} id="order">
          <FormContainer>
            <Heading>
              <MapPin size={22} weight="fill" color={theme["yellow-dark"]} />

              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </Heading>

            <AddressForm>
              <TextInput
                type="text"
                placeholder="CEP"
                gridArea="cep"
                error={errors.cep?.message}
                register={register}
                value="cep"
              />
              <TextInput
                type="text"
                placeholder="Rua"
                gridArea="rua"
                error={errors.street?.message}
                register={register}
                value="street"
              />
              <TextInput
                type="text"
                placeholder="Número"
                gridArea="numero"
                error={errors.number?.message}
                register={register}
                value="number"
              />
              <TextInput
                type="text"
                placeholder="Complemento"
                gridArea="complemento"
                error={errors.fullAddress?.message}
                register={register}
                value="fullAddress"
              />
              <TextInput
                type="text"
                placeholder="Bairro"
                gridArea="bairro"
                error={errors.neighborhood?.message}
                register={register}
                value="neighborhood"
              />
              <TextInput
                type="text"
                placeholder="Cidade"
                gridArea="cidade"
                error={errors.city?.message}
                register={register}
                value="city"
              />
              <TextInput
                type="text"
                placeholder="UF"
                gridArea="uf"
                error={errors.state?.message}
                register={register}
                value="state"
              />
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
                <PaymentOption
                  selected={selectedPaymentMethod === "credit"}
                  value="credit"
                  register={register}
                  name="paymentMethod"
                >
                  <CreditCard size={16} color={theme["purple"]} />
                  <span>Cartão de Crédito</span>
                </PaymentOption>

                <PaymentOption
                  selected={selectedPaymentMethod === "debit"}
                  value="debit"
                  register={register}
                  name="paymentMethod"
                >
                  <Bank size={16} color={theme["purple"]} />
                  <span>Cartão de Débito</span>
                </PaymentOption>

                <PaymentOption
                  selected={selectedPaymentMethod === "cash"}
                  value="cash"
                  register={register}
                  name="paymentMethod"
                >
                  <Money size={16} color={theme["purple"]} />
                  <span>Dinheiro</span>
                </PaymentOption>
              </PaymentOptions>
            </PaymentOptions>
          </FormContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartTotal>
          {cart.map((coffee) => (
            <Coffee key={coffee.id}>
              <div>
                <img src={coffee.imagem} alt={coffee.nome} />

                <div>
                  <span>{coffee.nome}</span>

                  <CoffeeInfo>
                    <QuantityInput
                      quantity={coffee.quantity}
                      incrementQuantity={() => incrementCoffee(coffee.id)}
                      decrementQuantity={() => decrementCoffee(coffee.id)}
                    />

                    <button onClick={() => removeCoffee(coffee.id)}>
                      <Trash color={theme["purple"]} />
                      <span>Remover</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>R$ {(coffee.price * coffee.quantity).toFixed(2)}</aside>
            </Coffee>
          ))}

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ {getTotalPrice().toFixed(2)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 9,99</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ {(getTotalPrice() + 9.99).toFixed(2)}</span>
            </div>
          </CartTotalInfo>

          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  );
}
