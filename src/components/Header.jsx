import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		background: '#f7f7eb',
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
	},
	headerIcon: {
		margin: '0 10px'
	},
	link: {
		color: 'black'
	}
});

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" color="primary" elevation={0} className={classes.root}>
			<Toolbar>
					<img src='./appIcon.png' className={classes.headerIcon}></img>
					<Typography variant="h6" color="inherit" noWrap>
						<Link href="/" className={classes.link}>
							Home Loan Calculator
						</Link>
					</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header;