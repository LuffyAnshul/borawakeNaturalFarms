import PageHeader from '../components/Services/PageHeader/PageHeader';
import ServicesInfo from '../components/Services/ServicesInfo/ServicesInfo';
import ServiceSection from '../components/Home/ServicesSection/ServiceSection';
import ProductBanner from '../components/Home/ProductBanner/ProductBanner';

import ScrollToTop from '../components/ScrollToTop';

function Services() {
	return (
		<div>
			<ScrollToTop />
			<PageHeader />
			<ServicesInfo />
			<ServiceSection />
			<div style={{ paddingTop: '120px' }} />
			<ProductBanner />
		</div>
	);
}

export default Services;