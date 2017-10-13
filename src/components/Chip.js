import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
	chip: {
		margin: theme.spacing.unit,
	},
	svgIcon: {
		color: grey[800],
	},
});


class Chips extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Chip
				avatar={<Avatar src={this.props.src} />}
				label={this.props.title}
				style={styles.chip}
			/>

		);
	}
}

export default Chips;