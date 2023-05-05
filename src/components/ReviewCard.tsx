import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Review } from '../../types/types';
import useGetUserProfile from '../api/useGetUserProfile';

export default function ReviewCard({
	author_id,
	body,
	created_at,
	rating,
	restaurant,
}: Review) {
	const { data: userProfile } = useGetUserProfile(author_id);
	
	return (
		<Card raised sx={{ marginTop: '20px', padding: '20px' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
				}}>
				<Typography variant='h4'>{restaurant}</Typography>
				<div>{rating} Stars</div>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
				}}>
				<Typography>{userProfile?.username}</Typography>
				<div>{new Date(created_at).toDateString()}</div>
			</Box>
			<Container sx={{ margin: '10px' }}>
				<Typography>{body}</Typography>
			</Container>
		</Card>
	);
}
