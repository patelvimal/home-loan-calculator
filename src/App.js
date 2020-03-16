import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoanResult from './LoanResult';
import './App.scss';

function App() {
	return (
		<React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">
						Home Loan Calculator
	    			</Typography>		
				</Toolbar>
			</AppBar>
			<Container maxWidth="lg" className="calc-form">
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<TextField
							required
							id="filled-required"
							label="Loan Amount"
							variant="outlined"
							size="small"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							id="filled-required"
							label="Interest Rate"
							variant="outlined"
							size="small"
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							id="filled-required"
							label="Loan Tenure"
							variant="outlined"
							size="small"
						/>
					</Grid>
					<Grid item xs={3}>
					<TextField
							required
							id="filled-required"
							label="PrePayment/Month"
							variant="outlined"
							size="small"
						/>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary">Calculate</Button>
					</Grid>
					<Grid item xs={12}>
						<LoanResult/>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}

export default App;
