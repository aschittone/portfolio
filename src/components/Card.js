import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Chip from './Chip'

const styles = {
	card: {
		maxWidth: 445,
	},
	media: {
		height: 200,
	},
	row: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
};

class SimpleMediaCard extends React.Component {
	constructor(props) {
		super(props)
	}


	render() {
		return (
			<div>
				<Card style={styles.card}>
					<CardMedia
						style={styles.media}
						image={this.props.info.img}
						title={this.props.info.title}
					/>
					<CardContent>
						<Typography type="headline" component="h2">
							{this.props.info.title}
						</Typography>
						<Typography component="p">
							{this.props.info.desc}
						</Typography>
					</CardContent>
					{this.props.type === 1 || this.props.type === 2 ?
						<div style={styles.row}>
							<Chip title='ReactJS' src="https://cdn.auth0.com/blog/react-js/react.png" />
							<Chip title='Ruby on Rails' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWA23G7IIuflGvdP12fw1EjuyhJhhHyREyq6o1cJJ9kFuDSs1aA' />
						</div> :
						<div style={styles.row}>
							<Chip title='Vanilla JS' src='http://www.sitepen.com/blog/wp-content/uploads/2016/04/js.png' />
							<Chip title='Ruby on Rails' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWA23G7IIuflGvdP12fw1EjuyhJhhHyREyq6o1cJJ9kFuDSs1aA' />
						</div>}
					<CardActions>
						<Button dense href={this.props.info.demo} color="primary">
							Demo
          </Button>
						<Button dense href={this.props.info.github} color="primary">
							Github
          </Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}



export default SimpleMediaCard;