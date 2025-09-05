import Layout from "../../../Components/Layouts/PortfolioLayout/Layout";
import AboutSection from "../UI/AboutSection/AboutSection";
import FlowSection from "../UI/FlowSection/FlowSection";
import GetStarted from "../UI/GetStartedSection/GetStarted";
import HeroSection from "../UI/HeroSection/HeroSection";
import NavBar from "../UI/NavBar/NavBar";

function Index() {
  return (
    <>
      <Layout OuterClassName=" bg-gradient-to-r from-fuchsia-500 to-teal-400 shadow-md">
        <NavBar />
      </Layout>
      <HeroSection />
      <Layout
        OuterClassName="bg-gray-500 p-4"
        innerClassName="bg-amber-100 p-4"
      >
        <h1 className="text-center text-8xl" id="FlowSection">
          Project Flow
        </h1>
        <FlowSection />
      </Layout>
      <Layout OuterClassName="bg-gray-50">
        <AboutSection />
      </Layout>
      <Layout OuterClassName="bg-gray-50">
        <GetStarted />
      </Layout>
    </>
  );
}

export default Index;
