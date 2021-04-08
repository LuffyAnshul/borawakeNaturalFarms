import { Link } from 'react-router-dom';
import { featuredLeaf, aboutImg1, aboutImg2, aboutIcon1, aboutIcon2, aboutIcon3 } from '../../../assets/images';

import './AgricultureMarket.css';

function AgricultureMarket() {
	return(
		<section className="about_one" >
			<div className="container" >
				<div className="row" >
					<div className="col-xl-6 col-lg-6" >
						<div className="about1_img" >
							<div className="about1_shape_1" ></div> 
							<img src={aboutImg1} alt="About"  /> 
							<div className="about1_icon-box" >
								<div className="circle" >
									<img src={aboutIcon3} alt="Icon3" style={{ marginTop: 16 }} />
								</div>
							</div> 
							<div className="about_img_2" >
								<img src={aboutImg2} alt="about secondary"  />
							</div>
						</div>
					</div>


					<div className="col-xl-6 col-lg-6 mt-lg-1 mt-md-5 mt-5" >
						<div className="block-title text-left" >
							<p >About Us</p> 
							<h3 >We’re In Agriculture Market</h3> 
							<div className="leaf" >
								<img src={featuredLeaf} alt="Leaf"  />
							</div>
						</div> 
						<div className="about_content" >
							<div className="text" >
								<p >
									There are many variations of passages of Lorem Ipsum available, but the majority have
									suffered alteration in some form, by injected humour, or randomised words which
									don't look even slightly believable.
								</p>
							</div> 
							<div className="about1_icon_wrap row" >
								<div className="about1_icon_single col-md-6 col-sm-12 my-4" >
									<div className="about1_icon" >
										<img src={aboutIcon1} alt="Icon1" />
									</div> 
									<p >Growing Fruits and Vegetables</p>
								</div> 
								<div className="about1_icon_single col-md-6 col-sm-12 my-4" >
									<div className="about1_icon" >
										<img src={aboutIcon2} alt="Icon2" />
									</div> 
									<p >Tips for Ripening your Fruits</p>
								</div>
							</div> 
							<div className="bottom_text" >
								<p > 
									If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
									anything embarrassing hidden in the middle of text.
								</p>
							</div> 
							<div className="about1__button-block" >
								<Link to="/aboutus" className="thm-btn about_one__btn" >Learn More</Link>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default AgricultureMarket;