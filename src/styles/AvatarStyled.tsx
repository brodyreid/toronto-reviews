import { Avatar } from '@mui/material';

export default function AvatarStyled({avatarUrl}: {avatarUrl: string}) {
	return (
		<Avatar
			style={{ objectFit: 'cover', height: 50, width: 50 }}
			src={avatarUrl}
		/>
	);
}
