import React from 'react';
import { View } from 'react-native';
import {StatusBar} from 'react-native';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#3d3dff"/>
    <Routes />
    </>
  );
}
