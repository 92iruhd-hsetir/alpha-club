import React, {lazy, useState} from 'react';

const Landing = lazy(() => import(/* webpackChunkName: "landing" */ './landing'))
const Home = lazy(() => import(/* webpackChunkName: "home" */ './home'))

function HomeParent () {
    const [page, setPage] = useState('');
    const enterHome = () => {
        setPage('home')
    }

    let comp = null;
    if(page === 'home') {
        comp = <Home />
    } else {
        comp = <Landing enterHome={enterHome} />
    }
    
    return (comp)
}

export default HomeParent;