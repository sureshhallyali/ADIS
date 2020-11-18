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

const App = createStackNavigator({
  ParticularCow: { screen: ParticularCow },
  SignIn: { screen: SignIn },
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  Recognsation: { screen: Recognsation },
  CowDetails: { screen: CowDetails },
  
  
});


export default createAppContainer(App);