import { HashLink as Link } from 'react-router-hash-link';

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
								<Link to="/contact#contactForm" className="thm-btn nuxt-link-exact-active nuxt-link-active">
									Contact Now
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