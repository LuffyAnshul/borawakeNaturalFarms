import { featuredLeaf, ContactImg } from '../../../assets/images';
import './TheTeam.css';

function TheTeam() {
	return(
		<section className="team_one" >
			<div className="container" >
				<div className="block-title text-center" >
					<p >our team members</p> 
					<h3 >meet the farmers</h3> 
					<div className="leaf" >
						<img src={featuredLeaf} alt="Leaf"  />
					</div>
				</div>

				<div className="row" >
					<div className="col-xl-3 col-lg-3 col-md-6" >
						<div className="team_one_single wow fadeInUp" >
							<div className="team_one_image" >
								<img src={ContactImg} alt="Profile"  />
							</div> 
							<div className="team_one_deatils" >
								<p >farmer</p> 
								<h2 >
									<a href="#" >David James</a>
								</h2> 
								<div className="team_one_social" >
									<a href="#" >
										<i className="fab fa-facebook-square" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-twitter" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-instagram" ></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-xl-3 col-lg-3 col-md-6" >
						<div className="team_one_single wow fadeInUp" >
							<div className="team_one_image" >
								<img src={ContactImg} alt="Profile"  />
							</div> 
							<div className="team_one_deatils" >
								<p >farmer</p> 
								<h2 >
									<a href="#" >David James</a>
								</h2> 
								<div className="team_one_social" >
									<a href="#" >
										<i className="fab fa-facebook-square" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-twitter" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-instagram" ></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-xl-3 col-lg-3 col-md-6" >
						<div className="team_one_single wow fadeInUp" >
							<div className="team_one_image" >
								<img src={ContactImg} alt="Profile"  />
							</div> 
							<div className="team_one_deatils" >
								<p >farmer</p> 
								<h2 >
									<a href="#" >David James</a>
								</h2> 
								<div className="team_one_social" >
									<a href="#" >
										<i className="fab fa-facebook-square" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-twitter" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-instagram" ></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-xl-3 col-lg-3 col-md-6" >
						<div className="team_one_single wow fadeInUp" >
							<div className="team_one_image" >
								<img src={ContactImg} alt="Profile"  />
							</div> 
							<div className="team_one_deatils" >
								<p >farmer</p> 
								<h2 >
									<a href="#" >David James</a>
								</h2> 
								<div className="team_one_social" >
									<a href="#" >
										<i className="fab fa-facebook-square" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-twitter" ></i>
									</a> 
									<a href="#" >
										<i className="fab fa-instagram" ></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				
				</div>

			</div>
		</section>
	);
}

export default TheTeam;