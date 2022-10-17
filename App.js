import {SafeAreaView, View} from 'react-native';
import {useContext, useEffect} from 'react';
import {ContentContext} from 'src/context/ContextProvider';
import RoutesNav from 'src/components/RoutesNav';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
const App = () => {
  const {dispatch} = useContext(ContentContext);
  useEffect(() => {
    dispatch({
      type: 'userRouterPermissions',
      payload: ['InfoScreen'],
    });
    const Interval = setInterval(() => {
      dispatch({
        type: 'communityTab',
        payload: 3 * Math.floor(Math.random() * 10) + 1,
      });
      dispatch({
        type: 'eventTab',
        payload: 3 * Math.floor(Math.random() * 10) + 1,
      });
      //轮询新数据;
    }, 1000);
    return () => clearInterval(Interval);
  }, []);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 0, backgroundColor: 'rgba(10,10,10,0.1)'}} />
      <RoutesNav />
      <SafeAreaView style={{flex: 0, backgroundColor: 'rgba(10,10,10,1)'}} />
    </View>
  );
};
export default App;
