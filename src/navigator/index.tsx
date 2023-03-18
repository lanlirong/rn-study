import * as React from 'react';
import { NavigationContainer,  } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

type RootStackParamsList = {
    Home: undefined,
    Detail: undefined,
}


export type RootStackNavigation = StackNavigationProp<RootStackParamsList>;
let Stack = createStackNavigator<RootStackParamsList>();

class Navigator  extends React.Component {
    render(): React.ReactNode {
        return (
            <NavigationContainer >
                <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
                    <Stack.Screen name='Home' component={Home}></Stack.Screen>
                    <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


export default Navigator;
