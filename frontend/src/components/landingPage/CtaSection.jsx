import {
  ButtonCtaPrimary,
  ButtonCtaSecondary,
} from "../../components/shared/button/ButtonCTA";

const CtaSection = () => {
  return (
    <div className="text-center text-gray-800 py-20">
      <h2 className="text-4xl font-playfair font-bold mb-6">
        Create a Lasting Memorial Today
      </h2>
      <p className="text-xl mb-12  font-lato max-w-2xl mx-auto text-gray-600">
        Honor your loved one with a beautiful digital memorial that preserves
        their memory for generations to come.
      </p>
      <div className="flex flex-row gap-6 justify-center">
        <ButtonCtaPrimary text={"Get Started"} />
        <ButtonCtaSecondary
          text={"View Example Memorial"}
          navigateTo={"/memorials"}
        />
      </div>
    </div>
  );
};

export default CtaSection;
