import Layout from "../../../../Components/Layouts/PortfolioLayout/Layout";
import style from "./../Style.module.css";

function HeroSection() {
  return (
    <div className={style.wum} id="HeroSection">
      <Layout OuterClassName="bg-[]">
        <h1 className={style["wum-r1"]}>
          Parking <span className={style["wum-small"]}>System</span> Mangment
        </h1>
      </Layout>
    </div>
  );
}

export default HeroSection;
