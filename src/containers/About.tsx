import { Typography } from '@mui/material';
import AboutCard from '../components/AboutCard';
import useGetAuthors from '../api/useGetAuthors';

const About = () => {
	const { data: authors, isLoading, isSuccess } = useGetAuthors();
	
	return (
		<>
			<Typography variant='h3'>Hello this is the About page</Typography>
			{isLoading ? (
				<Typography>Loading...</Typography>
			) : (
				isSuccess &&
				Boolean(authors.length) &&
				authors.map((author) => (
					<AboutCard key={author.hashedId} {...author} />
				))
			)}
		</>
	);
};

export default About;
