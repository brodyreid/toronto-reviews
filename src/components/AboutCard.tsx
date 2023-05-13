import {
	Card,
	CardContent,
	Avatar,
	Box,
	Container,
	Typography,
} from '@mui/material';
import { Profile } from '../../types/types';

const AboutCard = ({
	avatar_url,
	username,
	reviewsCount,
	created_at,
	bio,
}: Profile) => {
	return (
		<Card raised sx={{ marginTop: '20px', padding: '20px' }}>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '20px',
					}}>
					<Typography variant='h4'>{username}</Typography>
					<Avatar
						style={{ objectFit: 'cover', height: 50, width: 50 }}
						src={avatar_url}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
					}}>
					<Typography>
						Joined on {new Date(created_at).toDateString()}
					</Typography>
					{<Typography>Reviews: {reviewsCount}</Typography>}
				</Box>
				<Container sx={{ margin: '10px' }}>
					{Boolean(bio) && <Typography>{bio}</Typography>}
				</Container>
			</CardContent>
		</Card>
	);
};

export default AboutCard;
