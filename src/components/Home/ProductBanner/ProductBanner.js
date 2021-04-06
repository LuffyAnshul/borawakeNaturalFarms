import { Link } from 'react-router-dom';

import './ProductBanner.css';

function ProductBanner() {
	return(
		<section className="cta_three" >
			<div className="container" >
				<div className="row" >
					<div className="fluid-container" >
						<div className="cta-content row" >
							<div className="cta-text col-sm-7" >
								<h2>We Provide high-quality Products</h2>
							</div>
							<div className="cta-btn col-sm-5" >
								<Link to="/services" aria-current="page" class="thm-btn nuxt-link-exact-active nuxt-link-active">
									Discover More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductBanner;