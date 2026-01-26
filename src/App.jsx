import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import PageContent from "./layout/PageContent.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}
