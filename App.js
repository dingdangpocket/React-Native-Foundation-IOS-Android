import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useContext, useEffect } from "react"
import { ContentContext } from "./src/context/ContextProvider";
import RoutesNav from "./src/components/RoutesNav"
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const App = () => {
  const { dispatch } = useContext(ContentContext);
  useEffect(() => {
    dispatch({
      type: "userRouterPermissions",
      payload: [
        "InfoScreen",
      ],
    });
    dispatch({
      type: "communityTab",
      payload: 10
    });
    // NavigationBar.setColor('white')
  }, []);
  //   useEffect(() => {
  //     dispatch({
  //         type: "userRouterPermissions",
  //         payload: [
  //             "InfoScreen",
  //         ],
  //     });
  //     NavigationBar.setColor('white')
  //     const Interval = setInterval(() => {
  //         dispatch({
  //             type: "communityTab",
  //             payload: 10
  //         });
  //     }, 1000)
  //     return () => clearInterval(Interval);
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <RoutesNav />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;