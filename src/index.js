import React, { Component } from 'react';
import {Router,Scene} from 'react-native-router-flux';

import LoginPage from './pages/loginpages/loginpage.js';
import RegisterPage from './pages/registerpages/registerpage.js';
import MainPage from './pages/mainpages/mainpage.js';
import PlaceInfoPage from './pages/placeinfopages/placeinfopage.js';
import MasterPage from './pages/masterpages/masterpage.js';


const Index = () => {
    return(
        <Router> 
            <Scene key="root" navigationBarStyle={{backgroundColor: '#2980b9'}}  titleStyle={{color : "#FFF"}}>
                <Scene 
                    key="loginpage"
                    component={LoginPage}
                    title="Giriş Yapınız"
                />
                <Scene 
                    key="registerpage"
                    component={RegisterPage}
                    title="Kayıt Ol"
                />
                <Scene 
                    key="mainpage"
                    component={MainPage}
                    title="Anasayfa"
                    initial
                />
                <Scene 
                    key="placeinfopage"
                    component={PlaceInfoPage}
                    title="Konum Bilgileri"
                />

                <Scene 
                    key="masterpage"
                    component={MasterPage}
                    title="Usta Bilgileri"
                />
            </Scene>
        </Router>
    );
}

export default Index;
