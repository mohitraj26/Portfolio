import { TabsDemo } from "@/components/TabsDemo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";



export default function Home() {
  return (
    <>
    <main className="h-full bg-black/[0.96]">
    <WobbleCardDemo />
    <TabsDemo />
    <ContactForm />
    <Footer />
    </main>
    </>
  );
}
