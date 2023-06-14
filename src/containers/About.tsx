import { Typography } from '@mui/material';
import AboutCard from '../components/AboutCard';
import useGetAuthors from '../api/useGetAuthors';

const About = () => {
	const { data: authors, isLoading, isSuccess } = useGetAuthors();
	const cleanAuthors = (!!authors && authors.length) ? authors.filter((author) => author.username && author.reviewsCount > 0) : [];

	return (
		<>
			<Typography variant='h3'>Hello this is the About page</Typography>
			{isLoading ? (
				<Typography>Loading...</Typography>
			) : (
				isSuccess &&
				cleanAuthors.map((author) => (
					<AboutCard key={author.user_id} {...author} />
				))
			)}
		</>
	);
};

export default About;
