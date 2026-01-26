import HomeSlider from "../components/HomeSlider.jsx";
import EditorsPickCard from "../components/EditorsPickCard.jsx";
import HomeProducts from "../components/HomeProducts.jsx";
import VitaSlider from "../components/VitaSlider.jsx";
import NeuralUniverse from "../components/NeuralUniverse.jsx";
import BlogCard from "../components/BlogCard.jsx";

export default function HomePage() {
  return (
    <main className="w-full">
      <HomeSlider />
      <EditorsPickCard />
      <HomeProducts />
      <VitaSlider />
      <NeuralUniverse />
      <BlogCard />
    </main>
  );
}
