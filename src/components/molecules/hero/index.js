import Button from "../../atoms/button";

const Hero = () => {
  return (
    <section className="m-hero">
      <h1 className="m-hero__title"> Hey! I'm Sergio </h1>
      <h2 className="m-hero__subtitle">
        A minimal, clean, and AJAX driven free portfolio template created by the
        fine folks at Colorlib.
      </h2>
      <Button>More Free templates</Button>
    </section>
  );
};

export default Hero;
