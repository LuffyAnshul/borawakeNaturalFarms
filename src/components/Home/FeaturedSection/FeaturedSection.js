import { featuredLeaf } from '../../../assets/images';

import './FeaturedSection.css';

function FeaturedSection() {
	return(
		<section className="featured-one" >
			<div className="container" >
				<div className="row" >
					<div className="col-md-6 my-1" >
						<div className="single_featured_box container" >
							<div className="row text-center justify-content-center align-items-center" >
								<img className="col-xl-2 col-lg-1 col-md-12" src={featuredLeaf} alt="Leaf Left" />
								<span className="col-xl-8 col-lg-10 col-md-12">We Sale Best Agriculture Products</span>
								<img className="col-xl-2 col-lg-1 col-md-12" src={featuredLeaf} alt="Leaf Right" />

							</div>
						</div>
					</div>

					<div className="col-md-6 my-1 " >
						<div className="single_featured_box container" >
							<div className="row text-center justify-content-center" >
								<img className="col-xl-2 col-lg-1 col-md-12" src={featuredLeaf} alt="Leaf Left" />
								<span className="col-xl-8 col-lg-10 col-md-12">We’ve 10 years experience in field</span>
								<img className="col-xl-2 col-lg-1 col-md-12" src={featuredLeaf} alt="Leaf Right" />

							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default FeaturedSection;