import './App.css';
import Header from './containers/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Reviews from './containers/Reviews';
import Contact from './containers/Contact';
import Footer from './containers/Footer';
import { Container } from '@mui/material';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Fragment } from 'react';

const SUPABASE_URL = 'https://ahihbpdewjvyhhbglaym.supabase.co';
const SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoaWhicGRld2p2eWhoYmdsYXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MTYzNjksImV4cCI6MTk5ODI5MjM2OX0.qQwIBX7JM_MKKlKMTYNGM1UaG2UqxufYYEbKtXcN8L0';
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
		},
	},
});

const categories = [
	{
		title: 'Home',
		slug: '',
	},
	{
		title: 'About',
		slug: 'about',
	},
	{
		title: 'Reviews',
		slug: 'reviews',
	},
	{
		title: 'Contact',
		slug: 'contact',
	},
];

function App() {
	return (
		<Fragment>
				<QueryClientProvider client={queryClient}>
			<Container maxWidth='lg'>
					<Header title='Toronto Reviews' categories={categories} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='reviews' element={<Reviews />} />
						<Route path='contact' element={<Contact />} />
						<Route path='*' element={<h1>404 Not Found</h1>} />
					</Routes>
					<Footer />
			</Container>
				</QueryClientProvider>
		</Fragment>
	);
}

export default App;
