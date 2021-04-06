import ServiceSection from '../components/Home/ServicesSection/ServiceSection';
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSection';
import ProductBanner from '../components/Home/ProductBanner/ProductBanner';

function Home() {
	return (
		<div>
			<ServiceSection />
			<FeaturedSection/>
			<ProductBanner />
		</div>
	);
}

export default Home;