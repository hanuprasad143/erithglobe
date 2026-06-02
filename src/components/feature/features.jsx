import data from "../../Data/feature.json";
// import HeroSection from "@/components/slider/Heroslider";

const Features = () => {
  return (
    <section
      className=""
      style={{ backgroundImage: `url(/assets/img/bg/a28.jpg)` }}
    >
      <div className="feature-area">
        <div className="container">
          <div className="row about align-items-center">
            <div className="feature-box">
              {data.map((item, i) => (
                <div key={i} className="feature-sinble-single-box">
                  <div className="feature-icon">
                    <img src={item.img} alt="feature1" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-text text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <HeroSection /> */}
      </div>
    </section>
  );
};

export default Features;
