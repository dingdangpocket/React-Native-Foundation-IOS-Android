import { View, Text, StyleSheet } from 'react-native';
const InfoScreen = ({ route }) => {
    const { params } = route
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16 }}>具有访问权限:StackInfo:dingdang</Text>
            <Text style={{ fontSize: 16 }}>DeepLink参数{params?.id}</Text> 
        </View>
    );
};
const styles = StyleSheet.create({});
export default InfoScreen;