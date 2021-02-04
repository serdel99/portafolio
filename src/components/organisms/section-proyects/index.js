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
      {proyects.map(({ img, title, description }) => {
        return (
          <article className="o-proyects__item">
            <img src={img} className="o-proyects__img" />
            <div className="o-proyects-body">
              <h1 className="o-proyects__title"> {title} </h1>
              <p className="o-proyects__description">{description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default SectionProyects;
