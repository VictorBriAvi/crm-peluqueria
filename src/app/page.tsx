import Navbar from "@/ui/organisms/Navbar";
import Hero from "@/ui/organisms/Hero";
import Features from "@/ui/organisms/Features";
import Footer from "@/ui/organisms/Footer";
import DashboardPage from "./dashboard/page";

export default function LandingPage() {
  return (
    <>
      <Navbar />
    
      <DashboardPage />
      <Features />
      <Footer />
    </>
  );
}
