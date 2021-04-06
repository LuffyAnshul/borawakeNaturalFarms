import { Link } from 'react-router-dom';


import './TopNavigationBar.css';

function TopNavigationBar() {
	return (
		<div>
			{/* Above NavBar  */}
			<div className="topBarContainer">

				{/* Contact Info */}
				<div className="topContainer" >
					<div className="topbar-oneLeft" >
						<a href="#" >
							<span><i class="fas fa-envelope-open-text"> anshulborawake@gmail.com</i></span>
						</a>
						<a href="#" >
							<span><i class="fas fa-mobile-alt"> 9158191727</i></span>
						</a>
						
					</div>
				</div>

				{/* Logo */}
				<div className="topContainer" >
					<img 
						src="https://scontent.fnag2-1.fna.fbcdn.net/v/t1.6435-9/124185510_107817017805853_3477140049552109163_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=iYDqFP4J5rUAX_wxcFb&_nc_ht=scontent.fnag2-1.fna&oh=0aaba56794720ab8acc5ead47d580a83&oe=609133F1" 
						style={{ height: 100, width: 300 }}	
						alt="Logo"
					/>
				</div>

				{/* Social Media */}
				<div className="topContainer" >
					<div className="topbar-oneRight" >
						<a>
							<i class="fab fa-facebook-f"></i>
						</a>
						<a>
							<i class="far fa-envelope"></i>
						</a>
						<a>
							<i class="fab fa-whatsapp"></i>
						</a>
						<a>
							<i class="fab fa-facebook-f"></i>
						</a>
					</div>
				</div>
			</div>

			

			<header className="main-navHeader" >
				<div className="headerBG"> </div>
				<nav>
					<div className="topContainer" >
						<div>
							<ul className="navTabs">
								<li>
									<Link to="/" >Home</Link>
								</li>
								<li>
									<Link to="/services" >Services</Link>
								</li>
								<li>
									<Link to="/projects" >Projects</Link>
								</li>
								<li>
									<Link to="/gallery" >Gallery</Link>
								</li>
								<li>
									<Link to="/news" >News</Link>
								</li>
								<li>
									<Link to="/contact" >Contact</Link>
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