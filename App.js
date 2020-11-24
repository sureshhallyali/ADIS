import React, { Componet } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

{/* import screens */ }
import Home from './screens/home';
import SignIn from './screens/signIn';
import SignUp from './screens/signUp';
import Recognsation from './screens/recognisation';
import CowDetails from './screens/cowDetails';
import ParticularCow from './screens/particularCow';
import profile from "./screens/profile";
const App = createStackNavigator({
  profile: { screen: profile},
  Home: { screen: Home },
  ParticularCow: { screen: ParticularCow },
  SignIn: { screen: SignIn },
  
  SignUp: { screen: SignUp },
  Recognsation: { screen: Recognsation },
  CowDetails: { screen: CowDetails },
  
  
});


export default createAppContainer(App);