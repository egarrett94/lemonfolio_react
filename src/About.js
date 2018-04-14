import React, { Component } from 'react'; 
import Nav from './Nav';
import AboutPhoto from './about-photo.jpg';
import Resume from './resume-2018.pdf';
import Mailto from 'react-protected-mailto';

class About extends Component {

	render() {
		return(
			<div className='about-page'>
				<Nav />
				
				<div className='row about-info'>
					<div className='col s8 center qna-section'>
						<div className='col s8 offset-s2 center qna'>
							<h3>Emily "Lemon" Garrett</h3>
							<div className='myinfo'>
								<p>Seattle, WA | <Mailto tel='805-235-6282' /></p>
								<p><Mailto
							      email='e.marie.garrett@gmail.com'
							      headers={
							        {subject:'Hello, Lemon!'}
							      }/></p>
								<a href={Resume} target='_blank'><i className="material-icons white-text about-resume">file_download</i></a>
								<br />
								<span className='grey-text last'>(Here's my resume again.)</span>
								<br />
							</div>

							<p className='question'>
								Q: What are your goals for your web dev career?
							</p>
							<p className='answer'>
								A: I want to use my design skills and programming skills in tandem to make something magical. Ideally, I want my work to be mission-driven--I want to make a change in someone's life through the awesome power of today's technological advances. 
							</p>
							<p className='question'>
								Q: What's the best advice you've heard lately?
							</p>
							<p className='answer'>
								A: “<em>Get on with it.</em>"
									It's a sound approach to everything, though admittedly a bit brash. If you have the leisure to think about it, you have time to do it.
							</p>
							<p className='question'>
								Q: Is your nickname really Lemon?
							</p>
							<p className='answer last'>
								A: Yes. There's a story to it, but we'll get to that later.
							</p>
						</div>
					</div>
					<div className='col s4 about-photo'>
					</div>
				</div>
			</div>
		)
	}
}


export default About;