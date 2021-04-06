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
							<img src={featuredLeaf} />
						</div>
					</div>
					<div className="row" >

						<div className="col-xl-3 col-lg-3 col-md-6" >
							<div class="service_1_single wow fadeInUp">
								<div class="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div class="service_1_img" >
									<img src={service1img1} alt="Service Image 1"  /> 
									<div class="hover_box" >
										<a href="/service-detail" >
											<i class="fas fa-arrow-left"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6" >
							<div class="service_1_single wow fadeInUp">
								<div class="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div class="service_1_img" >
									<img src={service1img2} alt="Service Image 2"  /> 
									<div class="hover_box" >
										<a href="/service-detail" >
											<i class="fas fa-arrow-left"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6" >
							<div class="service_1_single wow fadeInUp">
								<div class="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div class="service_1_img" >
									<img src={service1img3} alt="Service Image 3"  /> 
									<div class="hover_box" >
										<a href="/service-detail" >
											<i class="fas fa-arrow-left"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6" >
							<div class="service_1_single wow fadeInUp">
								<div class="content" >
									<h3 >Fresh<br />vegetables</h3> 
									<p >Lorem ipsum is simply are many variations of pass of majority.</p>
								</div> 
								<div class="service_1_img" >
									<img src={service1img4} alt="Service Image 4"  /> 
									<div class="hover_box" >
										<a href="/service-detail" >
											<i class="fas fa-arrow-left"></i>
										</a>
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