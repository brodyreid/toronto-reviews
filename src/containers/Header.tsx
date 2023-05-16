import { Avatar, Button, Toolbar, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import { Category } from '../../types/types';
import { useSession } from '@supabase/auth-helpers-react';
import useGetUserProfile from '../api/useGetUserProfile';

interface HeaderProps {
	title: string;
	categories: Category[];
}

const Header = ({ title, categories }: HeaderProps) => {
	const session = useSession();
    const { data: user } = useGetUserProfile();
    const avatarUrl = user?.avatar_url ?? '';

	return (
		<>
			<Toolbar
				sx={{
					borderBottom: 2,
					borderColor: 'divider',
					justifyContent: 'space-between',
				}}>
				<Typography variant='h3' color='inherit'>
					{title}
				</Typography>
				{!session ? (
					<Button href='/login'>Login</Button>
				) : (
					<>
                        <Avatar src={avatarUrl} />
                        <Button href='/logout'>Logout</Button>
					</>
				)}
			</Toolbar>
			<NavBar categories={categories} />
		</>
	);
};

export default Header;
