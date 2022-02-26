import React, { useState } from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function LoginForm() {
    const [userName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const postData = () => {
		console.log(userName);
        console.log(Password);
        console.log("call api");
	}
	return (
        <React.Fragment>
            <Header />
			<Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
			<Grid container spacing={3} sm={12}>
				<Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="userName"
                        name="userName"
                        label="User name"
                        //variant="outlined"
                        fullWidth
                        autoComplete="given-name"
                        onChange={(e) => setUserName(e.target.value)}
                    />
				</Grid>
				<Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Password"
                        name="Password"
                        label="Password"
                        fullWidth
                        autoComplete="family-name"
                        onChange={(e) => setPassword(e.target.value)}
                    />
				</Grid>
				<Grid item xs={12} sm={6}>
                    <Button type="submit" color="inherit" id="Login" name="Login" onClick={postData}>Login</Button>
				</Grid>
			</Grid>
        </React.Fragment>
    )   
}