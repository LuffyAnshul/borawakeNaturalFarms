import PageHeader from '../components/Contact/PageHeader/PageHeader';
import ContactDetails from '../components/Contact/ContactDetails/ContactDetails';
import GoogleMaps from '../components/Contact/GoogleMaps/GoogleMaps';

function Contact() {
	return (
		<div>
			<PageHeader />
			<ContactDetails />
			<GoogleMaps />
		</div>
	);
}

export default Contact;