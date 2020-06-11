import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //eslint-disable-next-line
    Link,
    Redirect,
    useLocation
} from 'react-router-dom'

import Setup from './Setup'
import Writing from './Writing'
import Results from './Results'

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname])

    return null
}

const App = () => {
    /* States */
    const [ timeLimit, setTimeLimit ] = useState(10000)
    const [ timeRemaining, setTimeRemaining ] = useState(0)
    const [ wordLimit, setWordLimit ] = useState(100)
    const [ text, setText ] = useState('')
    const [ title, setTitle ] = useState('')

    return(
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/setup" />
                </Route>
                <Route path="/setup">
                    <Setup timeLimit={timeLimit} setTimeLimit={setTimeLimit}
                           timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining}
                           setWordLimit={setWordLimit}
                           setTitle={setTitle}
                    />
                </Route>
                <Route path="/writing">
                    <Writing text={text} setText={setText} 
                             timeLimit={timeLimit} setTimeLimit={setTimeLimit}
                             timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining}
                             wordLimit={wordLimit}
                             title={title} 
                    />
                </Route>
                <Route path="/results">
                    <Results text={text} timeLimit={timeLimit}
                             timeRemaining={timeRemaining} wordLimit={wordLimit}
                             title={title}
                    />
                </Route>
            </Switch>
        </Router>
    )
}

export default App