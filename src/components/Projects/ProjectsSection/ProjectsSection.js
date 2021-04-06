import { Link } from 'react-router-dom';

import { Project1, Project2, Project3, Project4, Project5, Project6 } from '../../../assets/images';
import './ProjectsSection.css';

function ProjectsSection() {
	return(
		<section className="recent-project my-4" >
			<div className="container" >
				<div class="row">

					<div class="col-xl-4 col-lg-4 col-md-4">
						<div class="recent_project_single mrb-30">
							<div class="project_img_box">
								<img src={Project1} alt="Recent Project Img" /> 
								<div class="project_content">
									<h3 >organic<br />solutions</h3>
								</div> 
								<div class="hover_box">
									<Link to="/projects_detail" class="">
										<i class="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  class="col-xl-4 col-lg-4 col-md-4">
						<div  class="recent_project_single mrb-30">
							<div  class="project_img_box">
								<img src={Project2} alt="Recent Project Img" /> 
								<div  class="project_content">
									<h3 >harvest<br />innovations</h3>
								</div> 
								<div  class="hover_box">
									<Link to="/projects_detail" class="">
										<i class="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  class="col-xl-4 col-lg-4 col-md-4">
						<div  class="recent_project_single mrb-30">
							<div  class="project_img_box">
								<img src={Project3} alt="Recent Project Img" /> 
								<div  class="project_content">
									<h3 >agriculture<br />farming</h3>
								</div> 
								<div  class="hover_box">
									<Link  to="/projects_detail" class="">
										<i class="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 
				
				</div>

				<div class="row">
					
					<div class="col-xl-4 col-lg-4 col-md-4">
						<div class="recent_project_single mrb-30">
							<div class="project_img_box">
								<img src={Project4} alt="Recent Project Img" /> 
								<div class="project_content">
									<h3 >the farming<br />season</h3>
								</div> 
								<div class="hover_box">
									<Link to="/projects_detail" class="">
										<i class="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  class="col-xl-4 col-lg-4 col-md-4">
						<div  class="recent_project_single mrb-30">
							<div  class="project_img_box">
								<img src={Project5} alt="Recent Project Img" /> 
								<div  class="project_content">
									<h3 >ecological<br />farming</h3>
								</div> 
								<div  class="hover_box">
									<Link to="/projects_detail" class="">
										<i class="fas fa-arrow-left"></i>
									</Link>
								</div>
							</div>
						</div>
					</div> 

					<div  class="col-xl-4 col-lg-4 col-md-4">
						<div  class="recent_project_single mrb-30">
							<div  class="project_img_box">
								<img src={Project6} alt="Recent Project Img" /> 
								<div  class="project_content">
									<h3 >natural way<br />of agriculture</h3>
								</div> 
								<div  class="hover_box">
									<Link  to="/projects_detail" class="">
										<i class="fas fa-arrow-left"></i>
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