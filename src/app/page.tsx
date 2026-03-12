import { MainLayout } from "@/components/templates/MainLayout";
import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Experiences } from "@/components/organisms/Experiences";
import { Sponsors } from "@/components/organisms/Sponsors";
import { Program } from "@/components/organisms/Program";
import { Contact } from "@/components/organisms/Contact";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experiences />
      <Sponsors />
      <Program />
      <Contact />
    </MainLayout>
  );
}
