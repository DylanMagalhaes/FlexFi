import Presentation from "../components/Presentation";
import InfoGrid from "../components/InfoGrid";
import Roadmap from "../components/Roadmap";
import Team from "@/components/Team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-8 bg-black min-h-screen ml-20 mr-20">
        {/* Welcome Section */}
        <Presentation />

        {/* Features Section */}
        <InfoGrid />

        {/* Call to Action Section */}
        <section className="text-center py-16 bg-black w-full">
          <h2 className="text-3xl font-bold text-white mb-8">Join FlexFi Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Sign up now and take control of your finances with FlexFi.
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700">
            Sign Up Now
          </button>
        </section>

        <Roadmap />

        <Team />
      </main>
      <Footer />
    </>
  );
}
