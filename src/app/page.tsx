"use client";

import { BusinessSolution } from "@/components/BusinessSolution";
import Presentation from "../components/Presentation";
import { PaymentOptions } from "@/components/PaymentOptions";
import { PoweredByBanner } from "@/components/PoweredByBanner";
import { WhyFlexFi } from "@/components/WhyFlexFi";
import { FAQFlexFi } from "@/components/FAQFlexFi";
// import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <main className="w-full">
        <div
          className="bg-gray-950 flex flex-col md:flex-row justify-between items-center h-screen pt-16 pb-16 px-4 md:px-32 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/flexfi-crypto-payment.webp')",
          }}
        >
          {/* Presentation component on top for smaller screens */}
          <div className="mb-8 md:mb-0">
            <Presentation />
          </div>
        </div>

        {/* Sections below maintain their own responsive layout */}

        <BusinessSolution />

        <PaymentOptions />

        <PoweredByBanner />

        <WhyFlexFi />

        <FAQFlexFi />
      </main>
    </>
  );
}
