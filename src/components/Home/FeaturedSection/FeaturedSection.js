import { featuredLeaf } from '../../../assets/images';

import './FeaturedSection.css';

function FeaturedSection() {
	return(
		<section className="featured-one" >
			<div className="container" >
				<div className="row" >
					<div className="col-md-6 wow slideInLeft" >
						<div className="single_featured_box" >
							<img src={featuredLeaf} alt="Leaf Left" />
							<span data-v-18c17ef2="">We Sale Best Agriculture Products</span>
							<img src={featuredLeaf} alt="Leaf Right" />
						</div>
					</div>

					<div className="col-md-6 wow slideInRight" >
						<div className="single_featured_box" >
							<img src={featuredLeaf} alt="Leaf Left" />
							<span data-v-18c17ef2="">We’ve 40 years experience in field</span>
							<img src={featuredLeaf} alt="Leaf Right" />
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default FeaturedSection;