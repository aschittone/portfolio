import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
	row: {
		display: 'flex',
		justifyContent: 'center',
	},
	avatar: {
		margin: 10,
	},
	bigAvatar: {
		width: 130,
		height: 130,
	},
};

function ImageAvatars(props) {
	const { classes } = props;
	return (
		<div className={classes.row}>
			<Avatar
				src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA29AAAAJDg3YzQ1NWFlLTVmMGItNDNjYy04ZDZjLTMzOGNhMGIwYWEyMA.jpg"
				className={classNames(classes.avatar, classes.bigAvatar)}
			/>
		</div>
	);
}

ImageAvatars.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);