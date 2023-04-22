import { Toolbar, Typography } from '@mui/material';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    title: string;
    categories: {
        title: string;
        slug: string;
    }[];
}

const Header = ({ title, categories }: HeaderProps) => {
    return (
        <Fragment>
            <Toolbar sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Typography variant="h3" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
            <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
                {categories.map((category) => (
                    <NavLink to={'/' + category.slug} color="inherit" key={category.title}>
                        {category.title}
                    </NavLink>
                ))}
            </Toolbar>
        </Fragment>
    );
};

export default Header;
