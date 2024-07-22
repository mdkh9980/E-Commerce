// import { useAuth } from "../../context/auth";
import ScrollToTopOnRouteChange from "../../utils/ScrollToTopOnRouteChange";
import Categories from "../../components/header/Categories";
import Banner from "./Banner/Banner";
import ProductSlider from "./ProductsListing/ProductSlider";
import { mensShoes } from "../../utils/electronics";
import { accessories } from "../../utils/accessories";
import { fashionProducts } from "../../utils/fashion";

const Home = () => {
    return (
        <>
            {/* <ScrollToTopOnRouteChange /> */}
            <Categories />
            <main className="flex flex-col items-center gap-3 px-2 pb-5 sm:mt-2">
                <Banner />
                <ProductSlider
                    title={"Best of Men Shoes"}
                    products={mensShoes}
                />
                <ProductSlider
                    title={"Kids Fashion & more"}
                    products={accessories}
                />

                <ProductSlider
                    title={"Fashion Top Deals"}
                    products={fashionProducts}
                />
            </main>
        </>
    );
};

export default Home;
