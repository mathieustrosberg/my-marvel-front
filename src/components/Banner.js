import hero from "../img/hero.jpg";

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="container-hero">
        <img src={hero} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
