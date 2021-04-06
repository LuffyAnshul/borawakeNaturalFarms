import PageHeader from '../components/Services/PageHeader/PageHeader';
import ServicesInfo from '../components/Services/ServicesInfo/ServicesInfo';
import ServiceSection from '../components/Home/ServicesSection/ServiceSection';
import ProductBanner from '../components/Home/ProductBanner/ProductBanner';


function Services() {
	return (
		<div>
			<PageHeader />
			<ServicesInfo />
			<ServiceSection />
			<div style={{ paddingTop: '120px' }} />
			<ProductBanner />
		</div>
	);
}

export default Services;