const SectionAbout = () => {
  return (
    <section className="o-about">
      <h2 className="o-about__title">Work experience</h2>
      <div className="o-about-works">
        {[1, 2, 3, 4].map(() => (
          <div className="o-about-work">
            <h3 className="o-about-work__position">Senior Web Designer</h3>
            <p className="o-about-work__agency">XYZ DESIGNER</p>
            <p className="o-about-work__date">2012-2014</p>
          </div>
        ))}
      </div>
      <div className="o-about-wrapper">
        <div className="o-about-img">
          <img
            src="https://picsum.photos/id/1//480/650"
            className="o-about-img__img"
          />
        </div>
        <div className="o-about-bio">
          <h2 className="o-about__title">Bio</h2>
          <p className="o-about-bio__description ">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
            <br />
            <br /> A small river named Duden flows by their place and supplies
            it with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth. A small river
            named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of
            sentences fly into your mouth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
