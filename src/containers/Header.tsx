import { Toolbar, Typography } from '@mui/material';
import { Fragment } from 'react';
import NavBar from '../components/NavBar';
import { Category } from '../../types/types';

interface HeaderProps {
    title: string;
    categories: Category[];
}

const Header = ({ title, categories }: HeaderProps) => {
    console.log('Header: ', categories)
    return (
        <Fragment>
            <Toolbar sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Typography variant="h3" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
            <NavBar categories={categories} />
        </Fragment>
    );
};

export default Header;
