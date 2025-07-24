import Navbar from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#151515] to-[#000000] h-screen w-full relative">
      <div className="w-15 h-[725px] absolute -top-[345px] left-[750px] bg-gradient-to-r from-[#D0A704] to-[#d0a70446] rotate-90 rounded-4xl blur-[100px]"></div>
      <Navbar />
      <main className="flex flex-col w-full relative top-[72px] p-6 gap-6">
        <VideoPlayer/>
        <section className="flex flex-col opacity-100 gap-2"></section>
      </main>
    </div>
  );
}
