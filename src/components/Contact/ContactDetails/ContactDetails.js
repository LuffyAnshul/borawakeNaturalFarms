import { ContactImg, featuredLeaf } from '../../../assets/images';

import './ContactDetails.css';

function ContactDetails() {
	return(
		<section className="contactDetails" >

			<div className="container" >

				<div className="row" >
					<div className="col-md-7" >
						<div className="contactFormWrap" id="contactForm" >
							<div className="block-title text-left" >
								<p>contact with us</p>
								<h3>WRITE US A MESSAGE</h3>
								<div className="leaf" >
									<img src={featuredLeaf} alt="Leaf" />
								</div>
							</div>

							<form action="#" className="contactForm mx-4" >
								<div className="row low-gutters" >
									<div className="col-md-6" >
										<div className="input-group" >
											<input name="name" placeholder="Your Name"  />
										</div>
									</div> 
									<div className="col-md-6" >
										<div className="input-group" >
											<input name="email" placeholder="Email Address"  />
										</div>
									</div> 
									<div className="col-md-6" >
										<div className="input-group" >
											<input name="phone" placeholder="Phone Number"  />
										</div>
									</div> 
									<div className="col-md-6" >
										<div className="input-group" >
											<input name="subject" placeholder="Subject"  />
										</div>
									</div> 
									<div className="col-md-12" >
										<div className="input-group" >
											<textarea name="message" placeholder="Write Message" ></textarea>
										</div>
									</div> 
									<div className="col-md-12" >
										<div className="input-group contact__btn" >
											<button type="submit" className="thm-btn contact-one__btn" >Send message</button>
										</div>
									</div>
								</div>
							</form>

						</div>
					</div>

					<div className="col-md-5" >
						<div className="have_questions ms-md-3 my-2" >
							<div className="image_box" >
								<img src={ContactImg} alt="Profile" />
							</div>
							<div className="block-title text-center" >
								<p>get in touch with us</p>
								<h3>Have question?</h3>
								<div className="leaf" >
									<img src={featuredLeaf} alt="Leaf" />
								</div>
							</div>

							<div className="have_questions_text" >
								<p>	There are many variations of passages available but the majority have suffered
									alteration in some form by inject humour or donec vel erat sollicitudin, dapibus dui
									at, porttitor sem.
								</p>
							</div>

						</div>

					</div>
				</div>

			</div>

		</section>
	);
}

export default ContactDetails;