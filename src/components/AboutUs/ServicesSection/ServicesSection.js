import { Link } from 'react-router-dom';

import './ServicesSection.css';

function ServicesSection() {
	return(
		<section className="services" >
			<div className="container" >
				<div className="row" >
					<div className="col-xl-12" >
						<div className="cta_one_content text-center" >
							<h1 >
								Provide you the Highest Quality products
								<br  />
								that Meets your Expectation
							</h1> 
							<p >Eu quo laoreet propriae, te has, vocent persius eum ea.</p> 
							<div className="cta_one__button-block" >
								<Link to="/farmProduce" className="thm-btn cta_one__btn" >
									Discover More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicesSection;