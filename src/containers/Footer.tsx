import { Copyright } from "@mui/icons-material";
import {  Box, Container, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'blue', py: 4, marginTop: 'auto', }}>
			<Container sx={{ bgcolor: 'yellow' }}>
				<Typography variant='h6' align='center' gutterBottom>
					This is a footer
				</Typography>
				<Typography
					variant='subtitle1'
					align='center'
					component='p'>
					This is a very desciptive footer. Maybe it will have links to other pages.
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}

export default Footer;