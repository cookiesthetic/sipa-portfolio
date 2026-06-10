import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AudioPlayer from "@/components/AudioPlayer";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import PolaroidGallery from "@/components/PolaroidGallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <NavBar />
      <Hero />
      <AudioPlayer />
      <About />
      <Certificates />
      <PolaroidGallery />
      <Contact />
    </main>
  );
}
