import { usePageStore } from "@/store/usePageStore";
import { GetStartedButton } from "./GetStartedButton";
import { useEffect, useRef, useState } from "react";

export const WhyFlexFi = () => {
  const { isShopper } = usePageStore();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // L'élément est visible, activer l'animation
          }
        });
      },
      { threshold: 0.1 } // 10% visible avant de déclencher
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="bg-black font-sans py-12 px-4 md:px-32 h-full lg:bg-[url('/images/flexfi-crypto-payment-user-advantages.webp')] lg:bg-contain lg:bg-no-repeat lg:bg-right"
    >
      <div className="container text-center">
        {/* Title Section */}
        <h2
          className={`font-display text-4xl font-extrabold text-white mb-16 w-full lg:w-1/2 text-left lg:pl-12 mt-20 ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[450ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          Why Choose FlexFi?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          {/* Right Section - Benefits */}
          <div className="w-full lg:w-1/2 text-left lg:pl-12">
            <ul className="space-y-6 mb-16">
              <li
                className={`${
                  isVisible
                    ? "motion-preset-slide-right motion-delay-[500ms]"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl text-white font-bold font-display">
                  {!isShopper
                    ? `Built for Flexibility`
                    : `Pay at Your Own Pace`}
                </h3>
                <p className="text-base sm:text-xl font-sans mb-8">
                  {!isShopper
                    ? `Focus on your business, not the payments. FlexFi offers
                  seamless crypto payment solutions that adapt to your needs,
                  effortlessly.`
                    : `FlexFi allows you to stake your funds to unlock the BNPL feature while earning a return. Our BNPL solution offers multi-payment options at a competitive cost, with no hidden fees or surprise penalties.`}
                </p>
              </li>
              <li
                className={`${
                  isVisible
                    ? "motion-preset-slide-right motion-delay-[600ms]"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-white font-display">
                  {!isShopper
                    ? `Ethical and Transparent Payments`
                    : `Total Transparency`}
                </h3>
                <p className="text-base sm:text-xl font-sans mb-8">
                  {!isShopper
                    ? `No hidden fees, no penalties. FlexFi empowers users to adjust
                  payment schedules as needed, ensuring fairness and full
                  transparency.`
                    : `FlexFi allows you to stake your funds to unlock the BNPL feature while earning a return. Our BNPL solution offers multi-payment options at a competitive cost, with no hidden fees or surprise penalties.`}
                </p>
              </li>
              <li
                className={`${
                  isVisible
                    ? "motion-preset-slide-right motion-delay-[700ms]"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-white font-display">
                  {!isShopper
                    ? `Global Crypto Payment Plans`
                    : `Suited to Your Lifestyle`}
                </h3>
                <p className="text-base sm:text-xl font-sans mb-8">
                  {!isShopper
                    ? `FlexFi provides secure, fast, and adaptable crypto payments to
                  meet the needs of a global audience.`
                    : `Get what you need immediately—FlexFi offers quick approval for a smooth and hassle-free shopping experience.`}
                </p>
              </li>
            </ul>
            <div
              className={`${
                isVisible
                  ? "motion-preset-slide-right motion-delay-[800ms]"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
