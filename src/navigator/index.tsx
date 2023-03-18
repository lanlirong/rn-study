import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import { StyleSheet, Platform } from 'react-native';

export type RootStackParamsList = {
    Home: undefined,
    Detail: {
        id: number
    },
}


export type RootStackNavigation = StackNavigationProp<RootStackParamsList>;
let Stack = createStackNavigator<RootStackParamsList>();

class Navigator extends React.Component {
    render(): React.ReactNode {
        return (
            <NavigationContainer >
                <Stack.Navigator screenOptions={{
                    headerTitleAlign: 'center',
                    headerMode: "float",
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true, // android 默认关闭手势
                    gestureDirection: 'horizontal', // android 默认向下滑返回上一页，改为水平滑动，
                    headerStyle: {
                        ...Platform.select({
                            android: {
                                elevation: 0,
                                borderBottomWidth: StyleSheet.hairlineWidth // 设置header没有阴影
                            }
                        })
                    }
                }}>
                    <Stack.Screen name='Home' component={Home}></Stack.Screen>
                    <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


export default Navigator;
