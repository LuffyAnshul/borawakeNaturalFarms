import { Link } from 'react-router-dom';

import { footerImg, service1img1, service1img2 } from '../../assets/images';

import './Footer.css';

function Footer() {
	return(
		<div>
			<footer className="site-footer" >
				<div class="site-footer_farm_image" >
					<img src={footerImg} alt="Farm Bcakground"  />
				</div>
				<div className="container" >
					<div className="row no-gutters" >
						
						<div class="col-xl-4 col-lg-4 col-md-6" >
							<div data-wow-delay="100ms" class="footer-widget__column footer-widget__about wow fadeInUp" >
								<div class="footer-widget__title" >
									<h3 >About</h3>
								</div> 
								<div class="footer-widget_about_text" >
									<p >Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac auctor.</p>
								</div> 
								<form >
									<div class="footer_input-box" >
										<input type="Email" placeholder="Email Address"  /> 
										<button type="submit" class="button" >
											<i class="fa fa-check" ></i>
										</button>
									</div>
								</form>
							</div>
						</div> 
						
						<div class="col-xl-2 col-lg-2 col-md-6" >
							<div data-wow-delay="200ms" class="footer-widget__column footer-widget__link wow fadeInUp" >
								<div class="footer-widget__title" >
									<h3 >Explore</h3>
								</div> 
								<ul class="footer-widget__links-list list-unstyled" >
									<li >
										<Link to="#" >About Us</Link>
									</li> 
									<li >
										<Link to="#" >Services</Link>
									</li> 
									<li >
										<Link to="#" >Our Projects</Link>
									</li>
									<li >
										<Link to="#" >Contact</Link>
									</li>
								</ul>
							</div>
						</div> 
						
						<div class="col-xl-3 col-lg-3 col-md-6" >
							<div data-wow-delay="300ms" class="footer-widget__column footer-widget__news wow fadeInUp" >
								<div class="footer-widget__title" >
									<h3 >News</h3>
								</div> 
								<ul class="footer-widget__news list-unstyled" >
									<li >
										<div class="footer-widget__news_image" >
											<img src={service1img1} alt="Post Title 1"  />
										</div> 
										<div class="footer-widget__news_text" >
											<p >
												<Link href="/news_detail"  > Learn 10 Best Tips for New Formers</Link>
											</p>
										</div> 
										<div class="footer-widget__news_date_box" >
											<p >30 Oct, 2020</p>
										</div>
									</li> 
									<li >
										<div class="footer-widget__news_image" >
											<img src={service1img2} alt="Post Title 2"  />
										</div> 
										<div class="footer-widget__news_text" >
											<p >
												<Link href="/news_detail" >Farmer Sentiment Darkens Hopes Fade</Link>
											</p>
										</div> 
										<div class="footer-widget__news_date_box" >
											<p >30 Oct, 2020</p>
										</div>
									</li>
								</ul>
							</div>
						</div> 

						<div class="col-xl-3 col-lg-3 col-md-6" >
							<div data-wow-delay="400ms" class="footer-widget__column footer-widget__contact wow fadeInUp" >
								<div class="footer-widget__title" >
									<h3 >Contact</h3>
								</div> 
								<div class="footer-widget_contact" >
									<p >66 Broklyn Street, New Town<br  />DC 5752, New Yrok</p> 
									<Link href="mailto:needhelp@agrikol.com" >needhelp@agrikol.com</Link>
									<br  /> 
									<Link href="tel:666-888-0000" >666 888 0000</Link> 
									<div class="site-footer__social" >
										<Link href="#" >
											<i class="fab fa-facebook-square" ></i>
										</Link> 
										<Link href="#" >
											<i class="fab fa-twitter" ></i>
										</Link> 
										<Link href="#" >
											<i class="fab fa-instagram" ></i>
											</Link> 
										<Link href="#" >
											<i class="fab fa-dribbble" ></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div class="site-footer_bottom">
				<div class="container">
					<div class="site-footer_bottom_copyright">
						<p>@ All copyright 2020, <Link href="#">Layerdrops.com</Link></p>
					</div> 
					<div class="site-footer_bottom_menu">
						<ul class="list-unstyled">
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

			<a href="#header" class="scroll-to-target scroll-to-top" style={{ display: 'block' }}>
				<i class="fa fa-angle-up"></i>
			</a>
		</div>
	);
}

export default Footer;