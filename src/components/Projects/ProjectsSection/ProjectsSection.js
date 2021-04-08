import { HashLink as Link } from 'react-router-hash-link';

import { Project1, Project2, Project3, Project4, Project5, Project6 } from '../../../assets/images';
import './ProjectsSection.css';

function ProjectsSection() {
	return(
		<section className="recent-project my-4" >
			<div className="container" >
				
				<div className="row">

					<div className="col-xl-4 col-lg-4 col-md-4">
						<div className="recent_project_single mrb-30">
							<div className="project_img_box">
								<img src={Project1} alt="Recent Project Img" /> 
								<div className="project_content">
									<h3 >organic<br />solutions</h3>
								</div> 
								<div className="hover_box">
									<Link to="/projectDetails#project1" >
										<i className="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  className="col-xl-4 col-lg-4 col-md-4">
						<div  className="recent_project_single mrb-30">
							<div  className="project_img_box">
								<img src={Project2} alt="Recent Project Img" /> 
								<div  className="project_content">
									<h3 >harvest<br />innovations</h3>
								</div> 
								<div  className="hover_box">
									<Link to="/projectDetails#project2" >
										<i className="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  className="col-xl-4 col-lg-4 col-md-4">
						<div  className="recent_project_single mrb-30">
							<div  className="project_img_box">
								<img src={Project3} alt="Recent Project Img" /> 
								<div  className="project_content">
									<h3 >agriculture<br />farming</h3>
								</div> 
								<div  className="hover_box">
									<Link to="/projectDetails#project3" className="">
										<i className="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 
				
				</div>

				<div className="row">
					
					<div className="col-xl-4 col-lg-4 col-md-4">
						<div className="recent_project_single mrb-30">
							<div className="project_img_box">
								<img src={Project4} alt="Recent Project Img" /> 
								<div className="project_content">
									<h3 >the farming<br />season</h3>
								</div> 
								<div className="hover_box">
									<Link to="/projectDetails#project4" className="">
										<i className="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  className="col-xl-4 col-lg-4 col-md-4">
						<div  className="recent_project_single mrb-30">
							<div  className="project_img_box">
								<img src={Project5} alt="Recent Project Img" /> 
								<div  className="project_content">
									<h3 >ecological<br />farming</h3>
								</div> 
								<div  className="hover_box">
									<Link to="/projectDetails#project5" className="">
										<i className="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  className="col-xl-4 col-lg-4 col-md-4">
						<div  className="recent_project_single mrb-30">
							<div  className="project_img_box">
								<img src={Project6} alt="Recent Project Img" /> 
								<div  className="project_content">
									<h3 >natural way<br />of agriculture</h3>
								</div> 
								<div  className="hover_box">
									<Link to="/projectDetails#project6" className="">
										<i className="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 
				
				</div>

			</div>
		</section>
	);
}

export default ProjectsSection;