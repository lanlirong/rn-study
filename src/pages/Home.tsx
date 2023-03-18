import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackNavigation } from '@/navigator/index';


interface IProps {
    navigation: RootStackNavigation
}
class Home extends React.Component<IProps> {
    onPress = () => {
        const {navigation} = this.props;
        navigation.navigate("Detail")
    }
    render(): React.ReactNode {
        return (
            <View>
                <Text>home</Text>
                <Button title="跳转到详情页" onPress={
                    this.onPress
                }></Button>
            </View>
        )
    }
}

export default Home;