import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useLocalStorage } from './lib/customhooks';

export default function AddressForm() {
    const [firstname, setFirstname] = useState("Rahul");
	/*const [formdata, setFormdata] = useState({
		firstName: "Rahul",
		lastName: "Harkhani"
	})*/
	const [formdata, setFormdata] = useLocalStorage("formdata", {
		firstName: "local",
		lastName: "storage"
	})
	const handleChange = (field, value) => {
		setFormdata({
			...formdata,
			[field] : value
		})
	}
	return (
        <React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						Menu Icon
					</IconButton>
					<Typography variant="h6">
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
			<Grid container spacing={3} sm={12}>
				<Grid item xs={12} sm={6}>
				<TextField
					required
					id="firstName"
					name="firstName"
					label="First name"
					//variant="outlined"
					fullWidth
					autoComplete="given-name"
					value={formdata.firstName}
					onChange={(e)=>handleChange("firstName", e.target.value)}
				/>
				</Grid>
				<Grid item xs={12} sm={6}>
				<TextField
					required
					id="lastName"
					name="lastName"
					label="Last name"
					fullWidth
					autoComplete="family-name"
					value={formdata.lastName}
					onChange={(e)=>handleChange("lastName", e.target.value)}
				/>
				</Grid>
				<Grid item xs={12}>
				<TextField
					required
					id="address1"
					name="address1"
					label="Address line 1"
					fullWidth
					autoComplete="shipping address-line1"
					value={formdata.address1}
					onChange={(e)=>handleChange("address1", e.target.value)}
				/>
				</Grid>
				<Grid item xs={12}>
				<TextField
					id="address2"
					name="address2"
					label="Address line 2"
					fullWidth
					autoComplete="shipping address-line2"
					value={formdata.address2}
					onChange={(e)=>handleChange("address2", e.target.value)}
				/>
				</Grid>
				<Grid item xs={12} sm={6}>
				<TextField
					required
					id="city"
					name="city"
					label="City"
					fullWidth
					autoComplete="shipping address-level2"
					value={formdata.city}
					onChange={(e)=>handleChange("city", e.target.value)}
				/>
				</Grid>
				<Grid item xs={12} sm={6}>
				<TextField id="state" name="state" label="State/Province/Region" fullWidth
				value={formdata.state}
				onChange={(e)=>handleChange("state", e.target.value)} />
				</Grid>
				<Grid item xs={12} sm={6}>
				<TextField
					required
					id="zip"
					name="zip"
					label="Zip / Postal code"
					fullWidth
					autoComplete="shipping postal-code"
					value={formdata.zip}
					onChange={(e)=>handleChange("zip", e.target.value)}
				/>
				</Grid>
				<Grid item xs={12} sm={6}>
				<TextField
					required
					id="country"
					name="country"
					label="Country"
					fullWidth
					autoComplete="shipping country"
					value={formdata.country}
					onChange={(e)=>handleChange("country", e.target.value)}
				/>
				</Grid>
			</Grid>
        </React.Fragment>
    )
    
}