const proyects = [
  { img: "https://via.placeholder.com/300x300.png", title: " title" },
  { img: "https://via.placeholder.com/300x400.png", title: " title" },
  { img: "https://via.placeholder.com/300x300.png", title: " title" },
  { img: "https://via.placeholder.com/300x400.png", title: " title" },
  { img: "https://via.placeholder.com/300x300.png", title: " title" },
  { img: "https://via.placeholder.com/300x400.png", title: " title" },
];

const SectionProyects = () => {
  return (
    <section className="o-proyects">
      {proyects.map((proyect) => {
        return (
          <article className="o-proyects__item">
            <img src={proyect.img} />
          </article>
        );
      })}
    </section>
  );
};

export default SectionProyects;
