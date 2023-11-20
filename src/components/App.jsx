import '../styles/App.css';
import React, { useState } from 'react';
import { PAGES } from './Pages';
import Appbody from './Appbody';
import Header from './Header';

const App = () => {
    const [page, setPage] = useState('Home');

    const handleClick = (page) => {
        setPage(page);
    };

    return (
        <div className='App'>
            <Header
                pages={PAGES}
                onClick={(page) => handleClick(page)}
            />
            <div className='App-body'>
                <Appbody
                    name={page}
                />
            </div>
        </div>
    );
}

export default App;
