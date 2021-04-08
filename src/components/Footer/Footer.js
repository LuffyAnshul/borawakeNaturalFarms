import { Link } from 'react-router-dom';

import { footerImg, service1img1, service1img2 } from '../../assets/images';

import './Footer.css';

function Footer() {

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return(
		<div>
			{/* Footer */}
			<footer className="site-footer" >
				{/* Footer Background */}
				<div className="site-footer_farm_image" >
					<img src={footerImg} alt="Farm Background"  />
				</div>

				{/* Footer Menu */}
				<div className="container" >
					<div className="row no-gutters" >
						
						{/* About */}
						<div className="col-xl-4 col-lg-4 col-md-6" >
							<div data-wow-delay="100ms" className="footer-widget__column footer-widget__about wow fadeInUp" >
								<div className="footer-widget__title" >
									<h3 >About</h3>
								</div> 
								<div className="footer-widget_about_text" >
									<p >Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac auctor.</p>
								</div> 
								<form >
									<div className="footer_input-box" >
										<input type="Email" placeholder="Email Address"  /> 
										<button type="submit" className="button" >
											<i className="fa fa-check" ></i>
										</button>
									</div>
								</form>
							</div>
						</div> 
						
						{/* Explore */}
						<div className="col-xl-2 col-lg-2 col-md-6" >
							<div data-wow-delay="200ms" className="footer-widget__column footer-widget__link wow fadeInUp" >
								<div className="footer-widget__title" >
									<h3 >Explore</h3>
								</div> 
								<ul className="footer-widget__links-list list-unstyled" >
									<li >
										<Link to="/aboutus" >About Us</Link>
									</li> 
									<li >
										<Link to="/farmProduce" >Farm Produce</Link>
									</li> 
									<li >
										<Link to="/projects" >Our Projects</Link>
									</li>
									<li >
										<Link to="/contact" >Contact</Link>
									</li>
								</ul>
							</div>
						</div> 

						{/* News */}
						<div className="col-xl-3 col-lg-3 col-md-6" >
							<div data-wow-delay="300ms" className="footer-widget__column footer-widget__news wow fadeInUp" >
								<div className="footer-widget__title" >
									<h3 >News</h3>
								</div> 
								<ul className="footer-widget__news list-unstyled" >
									<li >
										<div className="footer-widget__news_image" >
											<img src={service1img1} alt="Post Title 1"  />
										</div> 
										<div className="footer-widget__news_text" >
											<p >
												<Link href="/news_detail"  > Learn 10 Best Tips for New Formers</Link>
											</p>
										</div> 
										<div className="footer-widget__news_date_box" >
											<p >30 Oct, 2020</p>
										</div>
									</li> 
									<li >
										<div className="footer-widget__news_image" >
											<img src={service1img2} alt="Post Title 2"  />
										</div> 
										<div className="footer-widget__news_text" >
											<p >
												<Link href="/news_detail" >Farmer Sentiment Darkens Hopes Fade</Link>
											</p>
										</div> 
										<div className="footer-widget__news_date_box" >
											<p >30 Oct, 2020</p>
										</div>
									</li>
								</ul>
							</div>
						</div> 
						
						{/* Contact */}
						<div className="col-xl-3 col-lg-3 col-md-6" >
							<div data-wow-delay="400ms" className="footer-widget__column footer-widget__contact wow fadeInUp" >
								<div className="footer-widget__title" >
									<h3 >Contact</h3>
								</div> 
								<div className="footer-widget_contact" >
									<p >Gat No. 186/3, Post Manjur, <br  />Kopergaon, Kopargaon, Maharashtra 423604</p> 
									<a href="mailto:borawakenaturalfarms@gmail.com" >borawakenaturalfarms@gmail.com</a>
									<br  /> 
									<a href="tel:9890170090" >+91-9890170090</a> 
									<div className="site-footer__social" >
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
						</div>
					
					</div>
				</div>
			</footer>

			{/* Privacy Policy and Terms and Condition */}
			<div className="site-footer_bottom">
				<div className="container">
					<div className="site-footer_bottom_copyright">
						<p>@ All copyright 2020, <a href="mailto:anshulborawake@gmail.com">Borawake Natural Farms</a></p>
					</div> 
					<div className="site-footer_bottom_menu">
						<ul className="list-unstyled">
							<li>
								<Link href="privacyPolic.com">Privacy Policy</Link>
							</li> 
							<li>
								<Link href="termsAndConditions.com">Terms of Use</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div onClick={scrollToTop} className="scroll-to-target scroll-to-top" style={{ display: 'block' }}>
				<i className="fa fa-angle-up"></i>
			</div>
		</div>
	);
}

export default Footer;