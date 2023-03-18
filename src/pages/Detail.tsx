import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamsList } from '@/navigator/index';

interface IProps {
    route: RouteProp<RootStackParamsList, 'Detail'>
}
class Detail extends React.Component<IProps> {
    render(): React.ReactNode {
        const { route }  = this.props;
        return (
            <View>
                <Text>Detail</Text>
                <Text>{route.params.id}</Text>
            </View>
        )
    }
}

export default Detail;