import { useEffect, useContext } from 'react';
import { View, } from 'react-native';
import { ContentContext } from "../../context/ContextProvider";
import NavigationBar from 'react-native-navbar-color'
const Runtime = () => {
    const { dispatch } = useContext(ContentContext);
    useEffect(() => {
        dispatch({
            type: "userRouterPermissions",
            payload: [
                "InfoScreen",
            ],
        });
        NavigationBar.setColor('white')
        const Interval = setInterval(() => {
            dispatch({
                type: "communityTab",
                payload: 10
            });
        }, 1000)
        return () => clearInterval(Interval);
    }, []);
    return (
        <View style={{ flex: 1 }}>
        </View>
    );
};
export default Runtime;
