import Footer from "@/src/presentation/components/Footer";
import ResponsiveAppBar from "@/src/presentation/components/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <ResponsiveAppBar />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }