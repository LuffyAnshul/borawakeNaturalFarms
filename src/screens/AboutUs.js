import PageHeader from "../components/AboutUs/PageHeader/PageHeader";
import OurExperience from "../components/AboutUs/OurExperience/OurExperience";
import OurPortfolio from '../components/AboutUs/OurPortfolio/OurPortfolio';
import TheTeam from '../components/AboutUs/TheTeam/TheTeam';
import ServicesSection from "../components/AboutUs/ServicesSection/ServicesSection";

function AboutUs() {
	return (
		<>
			<PageHeader />
			<OurExperience />
			<OurPortfolio />
			<TheTeam />
			<ServicesSection />
		</>
	);
}

export default AboutUs;