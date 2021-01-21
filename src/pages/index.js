import DeafaultPageTemplate from "../components/templates/default-page";
import Header from "../components/organisms/header";
import Hero from "../components/molecules/hero";
import SectionProyects from "../components/organisms/section-proyects";
import SectionAbout from "../components/organisms/section-about";
import DefaultPageTemplate from "../components/templates/default-page";

export default function Home() {
  return (
    <DefaultPageTemplate>
      <Header />
      <Hero />
      <SectionProyects />
      <SectionAbout />
    </DefaultPageTemplate>
  );
}
