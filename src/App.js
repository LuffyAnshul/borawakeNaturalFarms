import { HashRouter as Router, Route, Switch } from "react-router-dom";

// NavBar
import TopNavigationBar from './components/TopNavigationBar/index';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';


// Pages
import Home from './screens/Home';
import Services from './screens/Services';
import Projects from './screens/Projects';
import ProjectDetails from './screens/ProjectDetails.js';
import AboutUs from './screens/AboutUs';
import News from './screens/News';
import Contact from './screens/Contact';

import PageNotFound from './screens/PageNotFound';


function App () {
	return(
		<>
			<Router>
				<TopNavigationBar />
				<ScrollToTop />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/farmProduce" exact component={Services} />
					<Route path="/projects" exact component={Projects} />
					<Route path="/projectDetails" component={ProjectDetails} />
					<Route path="/aboutus" exact component={AboutUs} />
					<Route path="/news" exact component={News} />
					<Route path="/contact" component={Contact} />
					<Route path="*" exact component={PageNotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;