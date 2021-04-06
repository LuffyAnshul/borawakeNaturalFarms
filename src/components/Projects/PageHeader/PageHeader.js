import { Link } from 'react-router-dom';

import './PageHeader.css'

function PageHeader() {
	return(
		<section class="page-header">
			<div class="container" >
				<h2>Projects</h2> 
				<ul class="thm-breadcrumb list-unstyled" >
					<li >
						<Link to="/" class="nuxt-link-active" >Home</Link>
					</li>
					<li >
						<span>Our Projects</span>
					</li>
				</ul>
			</div>
		</section>	
	);
}

export default PageHeader;