import React from 'react'
import Avatar from './Avatar'
import Card from './Card'
import Grid from 'material-ui/Grid';
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
	socialUrls: {
		github: 'https://github.com/aschittone',
		medium: 'https://medium.com/@aschittone',
		linkedIn: 'https://www.linkedin.com/in/andrew-schittone-800a9b4a/',
		resume: 'https://drive.google.com/file/d/0BzTMCcfKvsXnOEp2czgzdzNXY2M/view?usp=sharing'
	}
};

const info = {
	one: {
		title: 'The Bottom Line',
		img: 'https://photos-5.dropbox.com/t/2/AADCGGLlbLlxQG40QuTOoHTS9lOaaggSPNpXCqWCIO6hGQ/12/39354217/png/32x32/3/1507881600/0/2/Screen%20Shot%202017-10-12%20at%209.23.55%20PM.png/EMi-gR4Y14EDIAIoAg/wPYdwr15_Kj1i5qe9wsJtYqG1xGRN2XtnzJlJzMr0Mk?dl=0&size=1280x960&size_mode=3',
		desc: 'A simple way for investors to analyze potential cash flow, for rental properties they\'re looking to purchase.',
		demo: 'https://the-bottom-line.herokuapp.com',
		github: 'https://github.com/aschittone/the-bottom-line-frontend'
	},
	two: {
		title: 'Breed MatchUp',
		img: 'https://photos-2.dropbox.com/t/2/AACQ9h_r_sHjJjGBncnsqYcmD1BkR0lMTElz2PRX-s_0WQ/12/39354217/png/32x32/3/1507881600/0/2/Screen%20Shot%202017-10-12%20at%209.25.45%20PM.png/EMi-gR4Y14EDIAIoAg/8xQA0Uo5fuzZVCwXU9Lz4UOdRx2OReKo2ysNWvlmVr4?dl=0&size=1280x960&size_mode=3',
		desc: 'Enter your medium.com username and match your personality up with a dog breed that you\'ll fit well with.',
		demo: 'https://breed-matchup.herokuapp.com',
		github: 'https://github.com/aschittone/breed-matchup-frontend'
	},
	three: {
		title: 'Battleship',
		img: 'https://photos-2.dropbox.com/t/2/AACeII3hpNTu22opxuAxuopy5ec42HSmyGwm_rCmpRhAGQ/12/39354217/png/32x32/3/1507881600/0/2/Screen%20Shot%202017-10-12%20at%209.25.28%20PM.png/EMi-gR4Y14EDIAIoAg/YbB1D82bQfhb2X5sZ8OYaGbMgmqospYTkAOi-cWThrE?dl=0&size=1280x960&size_mode=3',
		desc: 'A modern replication of the classic multiplayer game: Battleship. Both players play on the same computer.',
		demo: 'https://ship-battle.herokuapp.com',
		github: 'https://github.com/aschittone/battleship-full'
	}
}

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
		var { medium, github, linkedIn, resume } = this.state.props.socialUrls;
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
								<a href='#portfolio' onClick={() => scroll.scrollTo(document.querySelectorAll('.vh.sec3')[0].getBoundingClientRect().y)}>Portfolio</a>
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
							<a target='_blank' href={medium} className='social-button'>
								Medium
								</a>
							<a target='_blank' href={github} className='social-button'>
								Github
								</a>
							<a target='_blank' href={linkedIn} className='social-button'>
								LinkedIn
								</a>
							<a target='_blank' href={resume} className='social-button'>
								Resume
								</a>
						</div>
					</header>
					<div id='nav-bg'></div>
				</div>{/*end sec1*/}

				<div id='portfolio' className='vh sec3' >
					<div className='fluid portfolio'>
						<h3 className='portfolioHead'>Portfolio</h3>
						<Grid container spacing={40}>
							<Grid item xs >
								<Card info={info.one} type={1} />
							</Grid>
							<Grid item xs >
								<Card info={info.two} type={2} />
							</Grid>
							<Grid item xs >
								<Card info={info.three} type={3} />
							</Grid>
						</Grid>

					</div>

				</div>
			</div>




		);
	}
}

export default Portfolio

