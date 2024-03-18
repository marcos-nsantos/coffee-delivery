import { IntroSection } from "./components/IntroSection";
import { CoffeeList, CoffeeListTitle, Container } from "./styles.ts";
import { CoffeeCard, CoffeeCardProps } from "./components/CoffeeCard";
import expressoTradicional from "../../assets/img/coffee/expresso-tradicional.png";

const coffees: CoffeeCardProps[] = [
  {
    id: "1",
    name: "Expresso Tradicional",
    description: "Café expresso com sabor e aroma marcantes.",
    tags: ["tradicional"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "2",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["tradicional"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "3",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["tradicional"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "4",
    name: "Expresso Gelato",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["tradicional", "gelato"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "5",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["tradicional", "com leite"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "6",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["tradicional", "com leite"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "7",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["tradicional", "com leite"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "8",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["tradicional", "com leite"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "9",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["tradicional", "com leite"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "10",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["especial", "com leite"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "11",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcoólico", "gelato"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "12",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "13",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    amount: 9.9,
    image: expressoTradicional,
  },
  {
    id: "14",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcóolico"],
    amount: 9.9,
    image: expressoTradicional,
  },
];

export function Home() {
  return (
    <main>
      <IntroSection />

      <Container>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </Container>
    </main>
  );
}
