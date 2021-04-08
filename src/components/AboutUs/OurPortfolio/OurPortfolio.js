import { Project1, featuredLeaf } from '../../../assets/images';

import './OurPortfolio.css';

function OurPortfolio() {
	return(
		<section className="portfolio" >
			<div className="container" >
				<div className="row" >
					<div className="col-xl-6 col-lg-6" >
						<div className="product_img" >
							<img src={Project1} alt="Portfolio"  /> 
							<div className="experience_box" >
								<h2 >10 Year</h2> 
								<p >Of Experience</p>
							</div>
						</div>
					</div>

					<div className="col-xl-6 col-lg-6" >
						<div className="growing_product" >
							<div className="block-title text-left" >
								<p >fresh products</p> 
								<h3 >Growing products</h3> 
								<div className="leaf" >
									<img src={featuredLeaf} alt="leaf"  />
								</div>
							</div> 
							<div className="growing_product_text" >
								<p >
									Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo
              						sit met entum estibu dignissim posuere cubilia durae. Leo sit met entum cubilia crae
              						onec.
								</p>
							</div> 
							<div className="progress-levels" >
								<div className="progress-box" >
									<div className="inner count-box" >
										<div className="text" >Agriculture</div> 
										<div className="bar" >
											<div className="bar-innner" >
												<div data-percent="68" className="bar-fill bar-fill-one" ></div>
											</div>
										</div>
									</div>
								</div> 
								<div className="progress-box" >
									<div className="inner count-box" >
										<div className="text" >Organic</div> 
										<div className="bar" >
											<div className="bar-innner" >
												<div data-percent="98" className="bar-fill bar-fill-two" ></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default OurPortfolio;