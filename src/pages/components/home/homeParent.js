import React, {lazy, useState} from 'react';

const Landing = lazy(() => import(/* webpackChunkName: "landing" */ './landing'))
const Home = lazy(() => import(/* webpackChunkName: "home" */ './home'))

function HomeParent ({urlBasePath, imageBasePath}) {
    const [page, setPage] = useState('');
    const enterHome = () => {
        setPage('home')
    }

    let comp = null;
    if(page === 'home') {
        comp = <Home urlBasePath={urlBasePath} imageBasePath={imageBasePath} />
    } else {
        comp = <Landing imageBasePath={imageBasePath} enterHome={enterHome} />
    }
    
    return (comp)
}

export default HomeParent;