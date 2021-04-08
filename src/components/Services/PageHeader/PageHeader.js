import { Link } from 'react-router-dom';

import './PageHeader.css'

function PageHeader() {
	return(
		<section className="page-header">
			<div className="container" >
				<h2>Services</h2> 
				<ul className="thm-breadcrumb list-unstyled" >
					<li >
						<Link to="/" className="nuxt-link-active" >Home</Link>
					</li>
					<li >
						<span >Services</span>
					</li>
				</ul>
			</div>
		</section>	
	);
}

export default PageHeader;