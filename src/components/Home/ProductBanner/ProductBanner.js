import { Link } from 'react-router-dom';

import './ProductBanner.css';

function ProductBanner() {
	return(
		<section className="cta_three" >
			<div className="container" >
				<div className="row" >
					<div className="col-md-12" >
						<div className="cta-content" >
							<div className="cta-text" >
								<h2>We Provide high-quality Products</h2>
							</div>
							<div className="cta-btn" >
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