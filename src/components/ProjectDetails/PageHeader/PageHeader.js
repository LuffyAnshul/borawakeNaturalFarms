import { Link } from 'react-router-dom';

import './PageHeader.css'

function PageHeader() {
	return(
		<section className="page-header">
			<div className="container" >
				<h2>Project Details</h2> 
				<ul className="thm-breadcrumb list-unstyled" >
					<li >
						<Link to="/" className="nuxt-link-active" >Home</Link>
					</li>
					<li >
						<span>Project Details</span>
					</li>
				</ul>
			</div>
		</section>	
	);
}

export default PageHeader;