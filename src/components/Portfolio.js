import React from 'react'

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
								<a href='#home'>Item 1</a>
							</li>
							<li>
								<a href='#about'>Item 2</a>
							</li>
							<li>
								<a href='#portfolio'>Item 3</a>
							</li>
							<li>
								<a href='#contact'>Item 4</a>
							</li>
						</ul>
					</div>
				</nav>
				<div id='home' className='vh sec1'>

					<header >
						<div className='container'>
							<h1>{header}</h1>
							<h2>Full Stack Developer</h2>
							<hr />
							<section className='center'>
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
							</section>
						</div>
					</header>

				</div>{/*end sec1*/}
				<div id='about' className='vh sec2' >
					<div className='fluid description'>
						<div>
							<h3>Who Am I?</h3>
							<p>{props.description.summary}</p>
							<h3>My Passion</h3>
							<p>{props.description.passion}</p>
							<h3>Principles:</h3>
							<p>{props.description.methodology}</p>
							<h3>Languages/Libraries</h3>
							<p>{props.description.tools}</p>
						</div>
						<img src={img} alt='avatar' />
					</div>
				</div>{/*end sec 2*/}
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
					<div id='contact' className='fluid contact-view'>
						<p>Contact me at email@email.com</p>
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