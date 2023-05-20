import { Box, CardContent, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { repeater } from '../utils/RepeatUtils';
import StarIcon from '@mui/icons-material/Star';
import { ReviewWithProfile } from '../../types/types';
import AvatarStyled from '../styles/AvatarStyled';

export default function ReviewCard(item: ReviewWithProfile ) {
	const {
			body,
			created_at,
			profile,
			rating,
			restaurant,
			isUserTheAuthor,
			id

	} = item;

	return (
		<Card key={id} raised sx={{ marginTop: '20px', padding: '20px' }}>
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
					{isUserTheAuthor ? <Typography>Me</Typography> : <Typography>{profile.username}</Typography>}
					<AvatarStyled avatarUrl={profile.avatar_url} />
					<div>{new Date(created_at).toDateString()}</div>
				</Box>
				<Container sx={{ margin: '10px' }}>
					<Typography>{body}</Typography>
				</Container>
			</CardContent>
		</Card>
	);
}
