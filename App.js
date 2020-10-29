import React, { Componet } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

{/* import screens */ }
import Home from './screens/home';
import SignIn from './screens/signIn';
import SignUp from './screens/signUp';
import Recognsation from './screens/recognisation';

const App = createStackNavigator({
  SignIn: { screen: SignIn },
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  Recognsation: { screen: Recognsation },
});

export default createAppContainer(App);