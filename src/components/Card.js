import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
	card: {
		maxWidth: 445,
	},
	media: {
		height: 200,
	},
};

const info = {
	one: {},
	two: {},
	three: {}
}


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
						image="/static/images/cards/contemplative-reptile.jpg"
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography type="headline" component="h2">
							Lizard
          </Typography>
						<Typography component="p">
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
					</CardContent>
					<CardActions>
						<Button dense color="primary">
							Share
          </Button>
						<Button dense color="primary">
							Learn More
          </Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}



export default SimpleMediaCard;