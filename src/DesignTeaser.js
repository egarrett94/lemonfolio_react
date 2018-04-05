import React, { Component } from 'react';

class DesignTeaser extends Component {

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
				<div className='col s12 m8 offset-m2 l6 center'>

					{/* image goes here for the laptop/phone mockups */}
					<div className='art-frame center'>
						<img className='art' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgUrl} alt='project mockup' />
					</div>
					<br />
					<span className='grey-text'>(Hover to see more.)</span>
				</div>
				<div className='col s12 m8 l3 offset-m2'>
					<h3>{ this.props.name }</h3>
					<p>{ this.props.description }</p>
				</div>
				<div className='col s12 m8 l3 offset-m2'>
					<h3>Tools</h3>
					<ul className='mats-tech-lists'>
						{this.props.materials}
					</ul>
				</div>
			</div>
		) 
	}
}

export default DesignTeaser;