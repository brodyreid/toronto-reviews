import { Container, Typography } from '@mui/material';
import AboutCard from '../components/AboutCard';

const author1 = {
	name: 'John Doe',
	bio: 'I am a software engineer',
	dateJoined: '2021-10-01',
};

const author2 = {
	name: 'Jane Doe',
	bio: 'I am a software engineer',
	dateJoined: '2021-10-01',
	numberOfReviews: 10,
};

const About = () => {
	return (
		<Container>
			<Typography variant='h3'>Hello this is the About page</Typography>
			<AboutCard {...author1} />
			<AboutCard {...author2} />
		</Container>
	);
};

export default About;
