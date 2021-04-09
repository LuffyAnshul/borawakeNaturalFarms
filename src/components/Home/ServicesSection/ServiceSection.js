import { HashLink as Link } from 'react-router-hash-link';

import { service1img1, service1img2, service1img3, service1img4, featuredLeaf } from '../../../assets/images'
import './ServiceSection.css';

function ServiceSection () {

	return(
		<section className="service-one" >

				<div className="container" >
					<div className="block-title text-center" >
						<p>What we do</p>
						<h3>Services We Offer</h3>
						<div className="leaf" >
							<img src={featuredLeaf} alt="Leaf" />
						</div>
					</div>
					<div className="row" >

						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 my-2" >
							<div className="service_1_single wow fadeInUp">
								<div className="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div className="service_1_img" >
									<img src={service1img1} alt="Service 1"  /> 
									<div className="hover_box" >
										<Link to="/contact#contactForm">
											<i className="fas fa-arrow-left"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 my-2" >
							<div className="service_1_single wow fadeInUp">
								<div className="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div className="service_1_img" >
									<img src={service1img2} alt="Service 2"  /> 
									<div className="hover_box" >
										<Link to="/contact#contactForm">
											<i className="fas fa-arrow-left"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 my-2" >
							<div className="service_1_single wow fadeInUp">
								<div className="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div className="service_1_img" >
									<img src={service1img3} alt="Service 3"  /> 
									<div className="hover_box" >
										<Link to="/contact#contactForm">
											<i className="fas fa-arrow-left"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 my-2" >
							<div className="service_1_single wow fadeInUp">
								<div className="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div className="service_1_img" >
									<img src={service1img4} alt="Service 4"  /> 
									<div className="hover_box" >
										<Link to="/contact#contactForm">
											<i className="fas fa-arrow-left"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		
	)
}

export default ServiceSection;