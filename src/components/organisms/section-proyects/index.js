const proyects = [
  {
    img: "https://picsum.photos/300/400/",
    title: " portfolio",
    description: "react.js, next.js",
  },
  {
    img: "https://picsum.photos/300/400/",
    title: " portfolio",
    description: "react.js, next.js",
  },
  {
    img: "https://picsum.photos/300/400/",
    title: " portfolio",
    description: "react.js, next.js",
  },
  {
    img: "https://picsum.photos/300/400/",
    title: " portfolio",
    description: "react.js, next.js",
  },
  {
    img: "https://picsum.photos/300/400/",
    title: " portfolio",
    description: "react.js, next.js",
  },
  {
    img: "https://picsum.photos/300/400/",
    title: " portfolio",
    description: "react.js, next.js",
  },
];

const SectionProyects = () => {
  return (
    <section className="o-proyects">
      <h1 className="o-proyects__title">Proyects</h1>
      <div className="o-proyects-wrapper">
        {proyects.map(({ img, title, description }) => {
          return (
            <article className="o-proyect">
              <img src={img} className="o-proyect__img" />
              <div className="o-proyect-body">
                <h1 className="o-proyect__title"> {title} </h1>
                <p className="o-proyect__description">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SectionProyects;
