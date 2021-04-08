import { Link } from 'react-router-dom';


import './TopNavigationBar.css';

function TopNavigationBar() {
	return (
		<div className="container" id="header">
			{/* Above NavBar  */}
			<div className="row align-items-center justify-content-center">

				{/* Contact Info */}
				<div className="col-lg-4 col-md-4 col-sm-12" >
					<div className="topbar-oneLeft" >
						<a href="mailto:borawakenaturalfarms@gmail.com" >
							<span><i className="fas fa-envelope-open-text"> borawakenaturalfarms@gmail.com</i></span>
						</a>
						<a href="tel:9890170090" >
							<span><i className="fas fa-mobile-alt"> 9890170090</i></span>
						</a>
						
					</div>
				</div>

				{/* Logo */}
				<div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center" >
					<img 
						src="https://scontent.fnag2-1.fna.fbcdn.net/v/t1.6435-9/124185510_107817017805853_3477140049552109163_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=iYDqFP4J5rUAX_wxcFb&_nc_ht=scontent.fnag2-1.fna&oh=0aaba56794720ab8acc5ead47d580a83&oe=609133F1" 
						style={{ height: 70, width: 200 }}	
						alt="Logo"
					/>
				</div>

				{/* Social Media */}
				<div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center" >
					<div className="topbar-oneRight" >
						<a href="https://www.facebook.com/borawakenaturalfarms/" >
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="mailto:borawakenaturalfarms@gmail.com" >
							<i className="far fa-envelope"></i>
						</a>
						<a href="https://api.whatsapp.com/send?phone=9890170090" >
							<i className="fab fa-whatsapp"></i>
						</a>
					</div>
				</div>
			</div>	

			<header className="main-navHeader" >
				<div className="headerBG"> </div>
				
				<nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
					<div className="container-fluid main-navHeader">
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
							<ul className="navbar-nav navTabs">
								<li>
									<Link to="/" className="nav-link">Home</Link>
								</li>
								<li>
									<Link to="/farmProduce" className="nav-link">Farm Produce</Link>
								</li>
								<li>
									<Link to="/projects" className="nav-link">Projects</Link>
								</li>
								<li>
									<Link to="/aboutus" className="nav-link">About Us</Link>
								</li>
								<li>
									<Link to="/news" className="nav-link">News</Link>
								</li>
								<li>
									<Link to="/contact"className="nav-link" >Contact</Link>
								</li>
							</ul>
						</div>
					
					</div>
				</nav>

			</header>

		</div>
	);

}

export default TopNavigationBar;