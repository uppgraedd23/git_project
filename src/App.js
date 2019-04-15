import React  from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>

            <Navbar />
            {/*<Navbar friends={props.state.friends}/>*/}


            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={ () => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch} /> }/>
                <Route path='/dialogs'
                       render={ () => <Dialogs store={props.store}/> }/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>

            </div>
        </div>

        )

};
export default App;
