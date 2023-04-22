import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Container } from '@mui/material';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

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
        <Container maxWidth='lg'>
            <Header title="Toronto Reviews" categories={categories} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </Container>
    );
}

export default App;
