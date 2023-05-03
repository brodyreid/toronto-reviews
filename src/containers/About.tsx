import { Container, Typography } from '@mui/material';
import AboutCard from '../components/AboutCard';

const authors = [
	{
		name: 'John Doe',
		bio: 'I am a software engineer',
		dateJoined: '2021-10-01',
	},
	{
		name: 'Jane Doe',
		bio: 'I am a software engineer',
		dateJoined: '2021-10-01',
		numberOfReviews: 10,
	},
];
const About = () => {
	return (
		<Container>
			<Typography variant='h3'>Hello this is the About page</Typography>
			{!!authors.length &&
				authors.map((author) => (
					<AboutCard key={author.name} {...author} />
				))}
		</Container>
	);
};

export default About;
