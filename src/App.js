import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// NavBar
import TopNavigationBar from './components/TopNavigationBar/index';
import Footer from './components/Footer/Footer';

// Pages
import Home from './screens/Home';
import Services from './screens/Services';
import Projects from './screens/Projects'
import Gallery from './screens/Gallery';
import News from './screens/News';
import Contact from './screens/Contact';

import PageNotFound from './screens/PageNotFound';


function App () {
	return(
		<>
			<Router>
				<TopNavigationBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/services" exact component={Services} />
					<Route path="/projects" exact component={Projects} />
					<Route path="/gallery" exact component={Gallery} />
					<Route path="/news" exact component={News} />
					<Route path="/contact" exact component={Contact} />
					<Route path="*" exact component={PageNotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;