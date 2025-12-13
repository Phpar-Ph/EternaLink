import CtaSection from "../../components/sections/CtaSection";
import Example from "../../components/sections/Example";
import Features from "../../components/sections/Features";
import Hero from "../../components/sections/Hero";
import HowItWorks from "../../components/sections/HowItWorks";
import { memorials } from "../../data/DummyPersonMemorialData";
import { howItWorks, featureData, MemorialExamples } from "../../data/HomeData";

import { useNavigate } from "react-router";
function Public() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <UnderConstruction /> */}

      {/* Hero Section */}
      <Hero onPrimaryCtaClick={() => navigate("/register")} />


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
