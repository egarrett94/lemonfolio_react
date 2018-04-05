import React, { Component } from 'react'; 
import Nav from './Nav';
import ProjectTeaser from './ProjectTeaser';
import froggoUrlLaptop from './froggo_laptop_mockup.png';
import chompsUrlLaptop from './chomps_laptop_mockup.png';
import equallyUrlLaptop from './equally_laptop_mockup.png';
import froggoPhone from './froggo_phone_mockup.png';
import chompsPhone from './chomps_phone_mockup.png';
import equallyPhone from'./equally_phone_mockup.png';

const froggoTech = ['HTML5', 'CSS3', 'HTML5 Canvas', 'JavaScript']
const chompsTech = ['Node', 'Express', 'HTML5/CSS3', 'Materialize', 'PostgreSQL/Sequelize', 'JavaScript', 'jQuery', 'BCrypt', 'EJS']
const equallyTech = ['React', 'Redux', 'Socket.io', 'Materialize/React-Materialize', 'Express', 'MongoDB', 'Mongoose', 'Axios', 'Node']

const froggoLiveLink = 'http://egarrett94.github.io/froggo'
const chompsLiveLink = 'http://choosychomps.herokuapp.com'
const equallyLiveLink = 'http://equally.herokuapp.com'

const froggoGit = 'http://www.github.com/egarrett94/froggo'
const chompsGit = 'http://www.github.com/egarrett94/choosy-chomps'
const equallyGit = 'http://www.github.com/kyleavb/equally'

class Projects extends Component {
	render() {

		const froggoList = froggoTech.map((tech) =>
		  <li>{tech}</li>
		);

		const chompsList = chompsTech.map((tech) =>
		  <li>{tech}</li>
		);

		const equallyList = equallyTech.map((tech) =>
		  <li>{tech}</li>
		);


		return(
			<div className='projects-page'>
				<Nav />
				<ProjectTeaser name='equally' 
					imgurl1={equallyUrlLaptop}
					imgurl2={equallyPhone} 
					description="equally is a MERN app that was made with marginalized, underrepresented people in mind. I worked on a team of three as the main designer to create a beautiful, resourceful place for LGBTQIA+ people in particular to have a safe space to talk one-on-one with an expert with a Socket.io chat, among a few other robust features." 
					technologies={equallyList}
					livelink={equallyLiveLink}
					gitlink={equallyGit} />
				<ProjectTeaser name='Choosy Chomps'
					imgurl1={chompsUrlLaptop}
					imgurl2={chompsPhone}
					description="Choosy Chomps is a full-stack Node+Express app that is catered to users with strict diets. Using the Edamam API, healthy recipes are right at the user's fingertips."
					technologies={chompsList}
					livelink={chompsLiveLink}
					gitlink={chompsGit} />
				<ProjectTeaser name='Froggo'
					imgurl1={froggoUrlLaptop}
					imgurl2={froggoPhone}
					description='Froggo is a colorful, addicting HTML5 Canvas game that has all custom-made graphics by yours truly. The browser and game is fully responsive, and I took the player experience into consideration every step of the way.'
					technologies={froggoList}
					livelink={froggoLiveLink}
					gitlink={froggoGit} />
			</div>
		)
	}
}


export default Projects;