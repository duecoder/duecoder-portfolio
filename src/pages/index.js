import Acomplishments from "../components/Contact/Contact";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation xs={0} sm={0} md={0} lg={12} />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
