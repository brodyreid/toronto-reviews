import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { Category } from "../../types/types";


export default function NavBar({categories}: {categories: Category[]}) {
    console.log(categories)
    return (
		<Toolbar
			component='nav'
			variant='dense'
			sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
			{categories.map((category) => (
				<NavLink
					to={'/' + category.slug}
					color='inherit'
					key={category.title}>
					{category.title}
				</NavLink>
			))}
		</Toolbar>
	);
}