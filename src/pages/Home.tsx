import Header from "../components/Header";
import OurValues from "../components/OurValues";
import CardsWithVideo from "../components/CardsWithVideo";

const Home = () => {
  return (
    <>
      <Header />
      <OurValues
        twoColumnTitle
        title="Our Values"
        bigTitle="Believe in innovation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
      />
      <CardsWithVideo reverse/>
    </>
  );
};

export default Home;
