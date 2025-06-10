import CtaSection from "../../components/landingPage/CtaSection";
import Example from "../../components/landingPage/Example";
import Features from "../../components/landingPage/Features";
import Hero from "../../components/landingPage/Hero";
import HowItWorks from "../../components/landingPage/HowItWorks";
import { memorials } from "../../data/DummyPersonMemorialData";
import { howItWorks, featureData, MemorialExamples } from "../../data/HomeData";

import { useNavigate } from "react-router";
function Public() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen max-w-7xl mx-auto p-4">
      {/* <UnderConstruction /> */}
      {/* Hero Section */}
      <Hero />
      {/* Features Section*/}
      <Features featureData={featureData} />
      {/* How It Works Section*/}
      <HowItWorks howItWorks={howItWorks} />
      {/* Memorial Example Section */}
      <Example
        MemorialExamples={MemorialExamples}
        memorials={memorials}
        navigate={navigate}
      />
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}

export default Public;
