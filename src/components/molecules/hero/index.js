import heroImg from "../../../assets/img/hero-img.jpg";
import GithubIcon from "../../../assets/img/Github-svg.svg";
import LinkedinIcon from "../../../assets/img/Linkedin-svg.svg";

const Hero = () => {
  return (
    <section className="m-hero">
      <div className="m-hero-content">
        <h1 className="m-hero__title"> Hey! I'm Sergio </h1>
        <h2 className="m-hero__subtitle">
          A minimal, clean, and AJAX driven free portfolio template created by
          the fine folks at Colorlib.
        </h2>
        <div className="m-hero-icons">
          <a
            className="m-hero-icons__item"
            href="https://www.linkedin.com/in/sergio-esteban-delgado-34334a168/"
          >
            <img src={LinkedinIcon} width={42} height={42} />
          </a>
          <a className="m-hero-icons__item" href="https://github.com/serdel99">
            <img src={GithubIcon} width={42} height={42} />
          </a>
        </div>
      </div>
      <img src={heroImg} className="m-hero-image" />
    </section>
  );
};

export default Hero;
