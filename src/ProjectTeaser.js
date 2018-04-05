import React, { Component } from 'react';

class ProjectTeaser extends Component {

	constructor(props) {
		super(props)

		this.state = {
			imgUrl: this.props.imgurl1
		}
		this.handleMouseOver = this.handleMouseOver.bind(this);
    	this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver() {
	    this.setState({
	      imgUrl: this.props.imgurl2
	    })
	  }

  	handleMouseOut() {
	    this.setState({
	      imgUrl: this.props.imgurl1
		})
	}

	render() {
		return(
			<div className='row'>
				<div className='col s12 m8 offset-m2 l6'>

					{/* image goes here for the laptop/phone mockups */}
					<img className='mockup' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgUrl} alt='project mockup' />
					<br />
					<span className='grey-text'>(Hover to see on mobile.)</span>
				</div>
				<div className='col s12 m8 l3 offset-m2'>
					<h3>{ this.props.name }</h3>
					<p>{ this.props.description }</p>
					<a className='yellow-text text-darken-2' href={this.props.livelink}>Live Link</a>
					<br />
					<a className='yellow-text text-darken-2' href={this.props.gitlink}>Check the code</a>
				</div>
				<div className='col s12 m8 l3 offset-m2'>
					<h3>Technologies</h3>
					<ul className='mats-tech-lists'>
						{this.props.technologies}
					</ul>
				</div>
			</div>
		) 
	}
}

export default ProjectTeaser;