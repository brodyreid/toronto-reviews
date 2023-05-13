import { Avatar, Box, CardContent, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { repeater } from '../utils/RepeatUtils';
import StarIcon from '@mui/icons-material/Star';
import { ReviewWithProfile } from '../../types/types';

export default function ReviewCard(props: ReviewWithProfile) {
	const { body, created_at, profile, rating, restaurant } = props;

	return (
		<Card raised sx={{ marginTop: '20px', padding: '20px' }}>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '20px',
					}}>
					<Typography variant='h4'>{restaurant}</Typography>
					<div>{repeater(<StarIcon />, rating)}</div>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
					}}>
					<Typography>{profile.username}</Typography>
					<Avatar
						style={{ objectFit: 'cover', height: 50, width: 50 }}
						src={profile.avatar_url}
					/>
					<div>{new Date(created_at).toDateString()}</div>
				</Box>
				<Container sx={{ margin: '10px' }}>
					<Typography>{body}</Typography>
				</Container>
			</CardContent>
		</Card>
	);
}
