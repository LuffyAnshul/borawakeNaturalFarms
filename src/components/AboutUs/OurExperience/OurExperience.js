import { featuredLeaf, Project1, Project2, Project3 } from '../../../assets/images';
import './OurExperience.css';

function OurExperience() {
	return(
		<section className="ourExperience" >
			<div className="container" >
				<div className="row align-items-center " >
					<div className="col-xl-6 col-lg-6 col-md-6" >
						<div className="block-title text-left" >
							<p >About Borawake Natural Farms</p> 
							<h3 >We’re Providing The Best Solution</h3> 
							<div className="leaf" >
								<img src={featuredLeaf} alt="leaf"  />
							</div>
						</div>
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6" >
						<p>
							There are many variations of passages of Lorem Ipsum available, but the majority have
							suffered alteration in some form, by injected humour, or randomised words which don't
							look even slightly believable. dicam laudem pertinacia ad pri. In brute mediocritatem
							sit, usu mucius everti no.
						</p>
					</div>
			
				</div>

				<div className="row" >
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3" >
						<div className="about_two_left" >
							<img src={Project1} alt="About Left"  />
						</div>
					</div> 
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3" >
						<div className="about_two_middle" >
							<img src={Project2} alt="About Center"  />
						</div>
					</div> 
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3" >
						<div className="about_two-right" >
							<img src={Project3} alt="About Right"  /> 
							<div className="about_two_content" >
								<h2 >We’ve 10 Years Agriculture Experience</h2>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default OurExperience;