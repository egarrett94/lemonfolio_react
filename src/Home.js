import React, { Component } from 'react'; 
import TwentyTwenty from 'react-twentytwenty';
import MeReal from './me_real2.jpg';
import MePainting from './emily2.png';
import LemonTree from './lemon-tree.png';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Resume from './resume-2018.pdf';
class Home extends Component {

	render() {
		return(
			<div className='home'>
				<TwentyTwenty
				  left={<img src={MePainting} alt='painting of Emily' />}
				  right={<img src={MeReal} alt='photo of Emily'/>}
				  slider={<div className='slider' />}
				/>
				<div className="nav">
					<div className='links'>
					<Link activeClassName="active" to='/projects'>PROJECTS</Link>
				    <Link activeClassName="active" to='/design'>DESIGN</Link>
				    <Link activeClassName="active" to='/about'>ABOUT</Link>
					</div>
				</div>


				<section className="se-container">
						<div className="se-slope">
							<article className="se-content name-section">
								<h3>EMILY GARRETT</h3>
								<br/>
								<marquee behavior='scroll' direction='left' className='marquee' scrollamount='3'>
									Front-End Web Dev <span className='white-text'>|</span> Artist Extraordinaire <span className='white-text'>|</span> Dog Petting Champion
								</marquee>
								<br/>
								<a href='http://www.github.com/egarrett94'><i id='github' className="fa fa-github social"></i></a>
								<a href='http://www.linkedin.com/in/emilymariegarrett94'><i id='linkedin' className="fa fa-linkedin social"></i></a>
								<a href='mailto:e.marie.garrett@gmail.com'><i id='email' className="fa fa-envelope social"></i></a>
								<br/>
								<span className='grey-text'>(Contact me.)</span>
								<br />
								<a href={Resume} target='_blank'><i className="material-icons social">file_download</i></a>
								<br />
								<span className='grey-text'>(Here's my resume.)</span>
							</article>
						</div>
						<div className="se-slope">
							<article className="se-content">
								<img src={LemonTree} className='lemontree1' alt='lemon tree' />
								<h3 className='quote'>— “ —</h3>
								<p>I am passionate about taking the opportunity to utilize 
								the endless resources that technology provides to help 
								those in need. I deeply believe in using technology 
								for more than just creating the slickest new product or 
								game; I believe in employing it to promote inclusivity 
								and create change. </p>
							</article>
						</div>
						 <div className="se-slope">
							<article className="se-content skills">
								<h3>SKILLS</h3>
								<div className='row'>
									<div className='col s4'>
										<h5 className='white-text'>LANGUAGES</h5>
										<ul>
											<li>JavaScript</li>
											<li>Python</li>
											<li>HTML5/CSS3</li>
											<li>SQL</li>
											<li>ES6</li>
											<li>Sass</li>
										</ul>
									</div>
									<div className='col s4'>
										<h5 className='white-text'>LIBRARIES</h5>
										<ul>
											<li>jQuery</li>
											<li>Materialize</li>
											<li>Bcrypt</li>
											<li>Passport</li>
											<li>Bootstrap</li>
											<li>Redux</li>
											<li>HTML5 Canvas</li>
											<li>EJS</li>
											<li>Axios</li>
										</ul>
									</div>
									<div className='col s4'>
										<h5 className='white-text'>FRAMEWORKS</h5>
										<ul>
											<li>React</li>
											<li>Django</li>
											<li>Express</li>
											<li>Node</li>
											<li>Mocha</li>
											<li>Chai</li>
										</ul>
									</div>

								</div>
								<div className='row'>
									<div className='col s4'>
										<h5 className='white-text'>DATABASES</h5>
										<ul>
											<li>PostreSQL</li>
											<li>MongoDB</li>
											<li>Mongoose</li>
											<li>Sequelize</li>
										</ul>
									</div>
									<div className='col s4'>
										<h5 className='white-text'>DESIGN</h5>
										<ul>
											<li>Adobe Photoshop</li>
											<li>Adobe Illustrator</li>
											<li>Image Manipulation</li>
											<li>Pixlr</li>
											<li>Color Theory</li>
											<li>Wireframing</li>
										</ul>
									</div>
									<div className='col s4'>
										<h5 className='white-text'>OTHER</h5>
										<ul>
											<li>RESTful Routing</li>
											<li>SCRUM / Kanban / Agile</li>
											<li>AJAX</li>
											<li>JSON</li>
											<li>Encryption</li>
											<li>Sessions</li>
										</ul>
									</div>
								</div>
								<div className='row center'>

								</div>
							</article>
						</div>

						<div className="se-slope">
							<article className="se-content">
								<img src={LemonTree} className='lemontree2' alt='lemon tree' />
								<h3>CONTACT</h3>
								<div className='form-container col s12 m8 offset-m2'>
									<div className='col s6 offset-s3'>
										<form className='contact-form' action="https://formspree.io/e.marie.garrett@gmail.com" method="POST">
										    <label htmlFor='name'>Your Name: </label>
										    <input type="text" className='browser-default inputs' name="name" placeholder="ex: Jane Doe, My Company Inc."/>
										    <br />
										    <label htmlFor='_replyto'>Your Email: </label>
										    <input type="email" className='browser-default inputs' name="_replyto" placeholder="ex: dogs_r_great@example.com"/>
										    <br />
										    <label htmlFor='_subject'>Subject: </label>
										    <input type="text" name="_subject" className='browser-default subject' defaultValue="Hey!" placeholder="Hey! You're great!" />
										    <textarea name="message" className='browser-default textareainput' placeholder="Hello there, Lemon, let's chat!"></textarea>
										    <input type="text" name="_gotcha" className='gotcha' />
										    <input type="submit" className='btn waves-effect waves-light' value="Send"/>
										</form>
									</div>
								</div>
							</article>
						</div>
						<footer>
							<p>&copy; Emily Garrett 2018</p>
						</footer>
				</section>

			</div>
		)
	}
}


export default Home;