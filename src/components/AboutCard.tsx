import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';

interface AboutCardProps {
	name: string;
	bio: string;
	dateJoined: string;
	numberOfReviews?: number;
}

const AboutCard = ({
	bio,
	dateJoined,
	name,
	numberOfReviews,
}: AboutCardProps) => {
	return (
		<Card raised sx={{ marginTop: '20px', padding: '20px' }}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<Typography variant='h4'>{name}</Typography>
				{numberOfReviews && (
					<div>Number of Reviews: {numberOfReviews}</div>
				)}
			</Box>
			<Typography>Joined {dateJoined}</Typography>
			<Container sx={{ margin: '10px' }}>
				<Typography>{bio}</Typography>
			</Container>
		</Card>
	);
};

export default AboutCard;
