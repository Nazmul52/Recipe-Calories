import HeroImage from "../assets/Hero.png";

const HeroSection = () => {
  return (
    <div
      className="hero  rounded-3xl mt-8 h-[700px]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl h-[700px]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-4xl font-bold">
            Discover an exceptional cooking class tailored for you !
          </h1>
          <p className="mb-12">
            Embark on a personalized culinary journey with our bespoke cooking
            classes. Unleash your inner chef and create culinary masterpieces in
            a unique learning experience.
          </p>
          <button className="btn font-bold bg-[#0BE58A] rounded-full border-[#0BE58A] px-8 my-4 lg:ml-0 ml-4">
            Explore Now
          </button>
          <button className="btn btn-outline ml-6 rounded-full border-white text-white px-8 ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
