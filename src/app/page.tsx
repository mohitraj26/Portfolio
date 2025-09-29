import { TabsDemo } from "@/components/TabsDemo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { main } from "framer-motion/client"
import { Contact } from "lucide-react";



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
