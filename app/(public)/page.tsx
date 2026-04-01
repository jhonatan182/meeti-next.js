import { generatePageTitle } from "@/src/shared/utils/metadata";
import Hero from "@/components/ui/Hero";

export const metadata = {
  title: generatePageTitle("Inicio"),
};

export default async function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
