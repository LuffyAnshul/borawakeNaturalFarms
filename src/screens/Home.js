import AgricultureMarket from '../components/Home/AgricultureMarket/AgricultureMarket';
import ServiceSection from '../components/Home/ServicesSection/ServiceSection';
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSection';
import ProductBanner from '../components/Home/ProductBanner/ProductBanner';

function Home() {
	return (
		<div>
			<AgricultureMarket />
			<ServiceSection />
			<FeaturedSection/>
			<ProductBanner />
		</div>
	);
}

export default Home;