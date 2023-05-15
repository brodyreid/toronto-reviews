import { Button, Toolbar, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import { Category } from '../../types/types';

interface HeaderProps {
	title: string;
	categories: Category[];
}

const Header = ({ title, categories }: HeaderProps) => {
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
				<Button href='/login'>Login</Button>
			</Toolbar>
			<NavBar categories={categories} />
		</>
	);
};

export default Header;
