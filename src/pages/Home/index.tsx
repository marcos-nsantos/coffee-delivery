import { IntroSection } from "./components/IntroSection";
import { CoffeeList, CoffeeListTitle, Container } from "./styles.ts";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
  return (
    <main>
      <IntroSection />

      <Container>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeList>
      </Container>
    </main>
  );
}
