import { generatePageTitle } from "@/src/shared/utils/metadata";
import Hero from "@/components/ui/Hero";

export const metadata = {
  title: generatePageTitle("Inicio"),
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
