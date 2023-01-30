import { sum } from "@project/utils/math/sum";
import { Text } from "@project/design-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">Importando modulo sum: 2+2 = {sum(2, 2)}</Text>
    </main>
  );
}
