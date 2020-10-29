import React, { Componet } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

{/* import screens */ }
import Home from './screens/home';
import SignIn from './screens/signIn';
import SignUp from './screens/signUp';
import Recognsation from './screens/recognisation';
import CowDetails from './screens/cowDetails';

const App = createStackNavigator({
  SignIn: { screen: SignIn },
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  Recognsation: { screen: Recognsation },
  CowDetails: { screen: CowDetails },
});

export default createAppContainer(App);