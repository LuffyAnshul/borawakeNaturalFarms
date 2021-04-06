import { Link } from 'react-router-dom';

import { featuredLeaf } from '../../../assets/images';
import './ServicesInfo.css';

function ServicesInfo() {
	return(
		<section className="service_four service_page" >
			<div className="container" >
				<div className="block-title text-center" >
					<p>What we do</p>
					<h3>Services We Offer</h3>
					<div className="leaf" >
						<img src={featuredLeaf} alt="Leaf" />
					</div>
				</div>
				<div className="row" >
					<div className='col-md-4' >
						<div className="service_four_single wow animated">
							<div className="service_four_icon">
								<span  className="icon-temperature"></span>
							</div> 
							<div className="service_four_details">
								<h3>
									<Link to="/service-detail" className="service_four_title">fresh vegetables</Link>
								</h3> 
								<p >
									There are many variations of passages of available, but the majority have suffered.
								</p>
							</div> 
							<div class="service_four_read_more">
								<Link to="/service-detail" class="">
									<i class="fas fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				
					<div className='col-md-4' >
						<div className="service_four_single wow animated">
							<div className="service_four_icon">
								<span  className="icon-temperature"></span>
							</div> 
							<div className="service_four_details">
								<h3>
									<Link to="/service-detail" className="service_four_title">fresh vegetables</Link>
								</h3> 
								<p >
									There are many variations of passages of available, but the majority have suffered.
								</p>
							</div> 
							<div class="service_four_read_more">
								<Link to="/service-detail" class="">
									<i class="fas fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>

					<div className='col-md-4' >
						<div className="service_four_single wow animated">
							<div className="service_four_icon">
								<span  className="icon-temperature"></span>
							</div> 
							<div className="service_four_details">
								<h3>
									<Link to="/service-detail" className="service_four_title">fresh vegetables</Link>
								</h3> 
								<p >
									There are many variations of passages of available, but the majority have suffered.
								</p>
							</div> 
							<div class="service_four_read_more">
								<Link to="/service-detail" class="">
									<i class="fas fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</section>
	);
}

export default ServicesInfo;