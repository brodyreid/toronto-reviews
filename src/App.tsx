import './App.css';
import Header from './containers/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Reviews from './containers/Reviews';
import Contact from './containers/Contact';
import { Container } from '@mui/material';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Fragment } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DEFAULT_AVATAR_URL = 'https://ahihbpdewjvyhhbglaym.supabase.co/storage/v1/object/sign/avatars/diet_coke.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2RpZXRfY29rZS5qcGciLCJpYXQiOjE2OTA0MTIxNDEsImV4cCI6MTcyMTk0ODE0MX0.jo3-xYgDVcOV4A_lMey0YukNIOSG81yN6GSyHgLd33Q&t=2023-07-26T22%3A55%3A42.393Z';
const SUPABASE_URL = process.env.NODE_ENV === 'production' ? 'https://ahihbpdewjvyhhbglaym.supabase.co' : 'http://localhost:54321';
const SUPABASE_ANON_KEY =
	process.env.NODE_ENV === 'production'
		? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoaWhicGRld2p2eWhoYmdsYXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MTYzNjksImV4cCI6MTk5ODI5MjM2OX0.qQwIBX7JM_MKKlKMTYNGM1UaG2UqxufYYEbKtXcN8L0'
		: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';
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

export default function App() {
	let session = null;
	supabase.auth.onAuthStateChange((_event, currentSession) => {
		session = currentSession;
	});
	
	return (
		<Fragment>
			<SessionContextProvider
				supabaseClient={supabase}
				initialSession={session}>
				<QueryClientProvider client={queryClient}>
					<Container maxWidth='lg'>
						<Header
							title='Toronto Reviews'
							categories={categories}
						/>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='about' element={<About />} />
							<Route path='reviews' element={<Reviews />} />
							<Route path='contact' element={<Contact />} />
							<Route path='*' element={<h1>404 Not Found</h1>} />
						</Routes>
						<ToastContainer
							position='bottom-right'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme='colored'
						/>
					</Container>
				</QueryClientProvider>
			</SessionContextProvider>
		</Fragment>
	);
}
