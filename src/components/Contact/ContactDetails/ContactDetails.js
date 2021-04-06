import { ContactImg, featuredLeaf } from '../../../assets/images';

import './ContactDetails.css';

function ContactDetails() {
	return(
		<section className="contactDetails" >

			<div className="container" >

				<div className="row" >
					<div className="col-md-7" >
						<div className="contactFormWrap" >
							<div className="block-title text-left" >
								<p>contact with us</p>
								<h3>WRITE US A MESSAGE</h3>
								<div className="leaf" >
									<img src={featuredLeaf} />
								</div>
							</div>

							<form action="#" class="contactForm" >
								<div class="row low-gutters" >
									<div class="col-md-6" >
										<div class="input-group" >
											<input name="name" placeholder="Your Name"  />
										</div>
									</div> 
									<div class="col-md-6" >
										<div class="input-group" >
											<input name="email" placeholder="Email Address"  />
										</div>
									</div> 
									<div class="col-md-6" >
										<div class="input-group" >
											<input name="phone" placeholder="Phone Number"  />
										</div>
									</div> 
									<div class="col-md-6" >
										<div class="input-group" >
											<input name="subject" placeholder="Subject"  />
										</div>
									</div> 
									<div class="col-md-12" >
										<div class="input-group" >
											<textarea name="message" placeholder="Write Message" ></textarea>
										</div>
									</div> 
									<div class="col-md-12" >
										<div class="input-group contact__btn" >
											<button type="submit" class="thm-btn contact-one__btn" >Send message</button>
										</div>
									</div>
								</div>
							</form>

						</div>
					</div>

					<div className="col-md-5" >
						<div className="have_questions" >
							<div className="image_box" >
								<img src={ContactImg} />
							</div>
							<div className="block-title text-center" >
								<p>get in touch with us</p>
								<h3>Have question?</h3>
								<div className="leaf" >
									<img src={featuredLeaf} />
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