import React from 'react'
import Avatar from './Avatar'
var Scroll = require('react-scroll');

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

var durationFn = function (deltaTop) {
	return deltaTop;
};

const img = '';
const cloudy = '';
const plant = '';
const vase = '';


const propsObj = {

	header: 'Andrew Schittone',

	description: {

		summary: "I'm a Frontend Web Developer and entrepenuer based in Seattle.",
		passion: "My passion is to use technology to effect positive social change.",
		methodology: 'Test-driven development,clean maintainable code',
		tools: "Javascript, jQuery, React, Backbone, Bootstrap"

	},
	socialUrls: {

		github: 'https://github.com/justindobbs',
		twitter: 'https://twitter.com/justinldobbs',
		linkedIn: 'https://www.linkedin.com/pub/justin-dobbs/99/a6b/b92',
		freeCodeCamp: 'https://freecodecamp.com/justindobbs'

	}

};

class Portfolio extends React.Component {

	constructor() {
		super()
		this.state = {
			props: propsObj
		}
		this.scrollToTop = this.scrollToTop.bind(this);
	}



	componentDidMount() {

		Events.scrollEvent.register('begin', function () {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function () {
			console.log("end", arguments);
		});

		scrollSpy.update();

	}
	scrollToTop() {
		scroll.scrollToTop();
	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}



	render() {
		var props = this.state.props;
		var that = this;
		var { twitter, github, linkedIn, freeCodeCamp } = this.state.props.socialUrls;
		var header = this.state.props.header;

		return (
			<div className="Portfolio-Page" >
				<nav>
					<div className='container'>
						<div className='fontawesome-cog' id='icon'></div>
						<ul>
							<li>
								<a href='#home' onClick={() => scroll.scrollTo(0)}>Me</a>
							</li>
							<li>
								<a href='#portfolio' onClick={() => scroll.scrollToBottom()}>Portfolio</a>
							</li>
						</ul>
					</div>
				</nav>
				<div id='home' className='vh sec1'>
					<header >
						<div className='container'>
							<Avatar />
							<h1>{header}</h1>
							<h2>Full Stack Developer</h2>
							<hr />
							<a target='_blank' href={twitter} className='social-button'>
								Medium
								</a>
							<a target='_blank' href={github} className='social-button'>
								Github
								</a>
							<a target='_blank' href={linkedIn} className='social-button'>
								LinkedIn
								</a>
							<a target='_blank' href={freeCodeCamp} className='social-button'>
								Resume
								</a>
						</div>
					</header>
					<div id='nav-bg'></div>
				</div>{/*end sec1*/}
				< div id='portfolio' className='vh sec3' >
					<div className='fluid portfolio'>
						<h3 className='portfolioHead'>Portfolio</h3>
						<div className='images'>
							<div className='pf-img'>
								<img src={cloudy} alt='img' />
								<div className='center caption'>
									<br />
									<div className='projectsHead'>Project Name</div>
									<p>
										<strong>library used</strong>
									</p>
								</div>
							</div>
							<div className='pf-img'>
								<img src={cloudy} alt='img' />
								<div className='center caption'>
									<br />
									<div className='projectsHead'>Project Name</div>
									<p>
										<strong>library used</strong>
									</p>
								</div>
							</div>
							<div className='pf-img'>
								<img src={cloudy} alt='img' />
								<div className='center caption'>
									<br />
									<div className='projectsHead'>Project Name</div>
									<p>
										<strong>library used</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>{/*end sec 3*/}
			</div >
		);
	}
}

export default Portfolio

	// < div className= 'fixed' >
	// 	<strong className='brand'>Name</strong>
	// 	<menu className='buttonGroup'>
	// 		<button className='nav-button'>
	// 			<a href='#home'>Home</a>
	// 		</button>
	// 		<button className='nav-button'>
	// 			<a href='#about'>About</a>
	// 		</button>
	// 		<button className='nav-button'>
	// 			<a href='#portfolio'>Portfolio</a>
	// 		</button>
	// 		<button className='nav-button'>
	// 			<a href='#contact'>Contact</a>
	// 		</button>
	// 	</menu>
	// 			</div >