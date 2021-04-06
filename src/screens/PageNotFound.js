import { Link } from 'react-router-dom';

import pageNotFound from '../assets/pageNotFound.jpg';

function PageNotFound() {
	return (
		<div className="container" >
			<div className="row align-items-center justify-content-center" >
				<div className="col-md-6 d-flex justify-content-center" >
					<img 
						src={pageNotFound}
						alt="404 Not Found"
						style={{ height: '70%', width: '70%', padding: '30px 0px' }}
					/>
				</div>

				<div className="col-md-6" >
					<div style={{ textAlign: 'center' }} >
						<h2>Whoops! Lost on Farm?</h2>
						<p style={{ fontWeight: '600', fontSize: 18, color: '#babcbe' }} >The page you're looking for isn't found :( <br /> We suggest you back to home</p>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }} >
						<Link to="/" style={{ padding: '0px 30px', backgroundColor: '#269bd1', borderRadius: 10, marginBottom: 20, textDecoration: 'none' }} >
							<p style={{ color: '#fff' }} >
								Back to Home
							</p>
						</Link>
					</div>
				
				</div>
			</div>
		</div>
	);
}

export default PageNotFound;