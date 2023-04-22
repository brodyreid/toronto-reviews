import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Container } from '@mui/material';

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
            </Routes>
        </Container>
    );
}

export default App;
