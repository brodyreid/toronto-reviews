import { Container, Typography } from '@mui/material';
import {Login} from '../components/Auth';

export default function Home() {
	return (
		<Container>
            <Typography variant='h3'>Hello this is the Home page</Typography>
            <Login />
		</Container>
	);
}
