import {Hero} from "@/app/components/Hero";
import {About} from "@/app/components/About";
import {LogoAnimation} from "@/app/components/LogoAnimation";
import {Portfolio} from "@/app/components/Portfolio";
import {Stack} from "@/app/components/Stack";
import {KeyMetrics} from "@/app/components/KeyMetrics";
import {Services} from "@/app/components/Services";
import {Contact} from "@/app/components/Contact";
import {Footer} from "@/app/components/Footer";
import {Navbar} from "@/app/components/Navbar";

export default function Home() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <LogoAnimation/>
      <About/>
      <Portfolio/>
      <Stack/>
      <KeyMetrics/>
      <Services/>
      <Contact/>
      <Footer/>
   </>
  );
}