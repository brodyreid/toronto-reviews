import { Box, Button, Toolbar, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import { Category } from '../../types/types';
import { useSession } from '@supabase/auth-helpers-react';
import useGetUserProfile from '../api/useGetUserProfile';
import { supabase } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AccountMenu from '../components/AccountMenu';

interface HeaderProps {
	title: string;
	categories: Category[];
}

const Header = ({ title, categories }: HeaderProps) => {
	const session = useSession();
	const navigate = useNavigate();
	const { data: user } = useGetUserProfile();
	const avatarUrl = user?.avatar_url ?? '';
	const username = user?.username ?? '';

	const handleLogout = async () => {
		await supabase.auth.signOut();
		toast.info('You have been logged out');
		navigate('/');
	};

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
					
						<Box sx={{display: 'flex'}}>
							<Typography variant='h6' color='inherit' sx={{alignSelf: 'center'}}>Hi, {username}</Typography>
							<AccountMenu avatarUrl={avatarUrl} />
						</Box>
				)}
			</Toolbar>
			<NavBar categories={categories} />
		</>
	);
};

export default Header;
