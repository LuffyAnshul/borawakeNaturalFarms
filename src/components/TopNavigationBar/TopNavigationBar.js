import { Link } from 'react-router-dom';


import './TopNavigationBar.css';

function TopNavigationBar() {
	return (
		<div className="fluid-container" id="header">
			{/* Above NavBar  */}
			<div className="row align-items-center justify-content-center">

				{/* Contact Info */}
				<div className="col-lg-4 col-md-4 col-sm-12" >
					<div className="topbar-oneLeft" >
						<a href="mailto:anshulborawake@gmail.com" >
							<span><i class="fas fa-envelope-open-text"> anshulborawake@gmail.com</i></span>
						</a>
						<a href="tel:9158191727" >
							<span><i class="fas fa-mobile-alt"> 9158191727</i></span>
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
						<a href="facebook.com" >
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="gmail.com" >
							<i class="far fa-envelope"></i>
						</a>
						<a href="yahoo.com" >
							<i class="fab fa-whatsapp"></i>
						</a>
						<a href="github.com" >
							<i class="fab fa-facebook-f"></i>
						</a>
					</div>
				</div>
			</div>

			

			<header className="main-navHeader" >
				<div className="headerBG"> </div>
				
				<nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
					<div class="container-fluid main-navHeader">
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
							<ul class="navbar-nav navTabs">
								<li>
									<Link to="/" class="nav-link">Home</Link>
								</li>
								<li>
									<Link to="/services" class="nav-link">Services</Link>
								</li>
								<li>
									<Link to="/projects" class="nav-link">Projects</Link>
								</li>
								<li>
									<Link to="/gallery" class="nav-link">Gallery</Link>
								</li>
								<li>
									<Link to="/news" class="nav-link">News</Link>
								</li>
								<li>
									<Link to="/contact"class="nav-link" >Contact</Link>
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