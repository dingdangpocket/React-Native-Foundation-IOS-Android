import { StyleSheet, SafeAreaView, Animated } from 'react-native';
import IncidentDescScreen from './src/screens/home/IncidentDescScreen';
import TheoryDescScreen from './src/screens/home/TheoryDescScreen';
import ImageSaveScreen from './src/screens/home/ImageSaveScreen';
import ImagePicker from './src/screens/home/ImagePicker';
import AudioScreen from './src/screens/home/AudioScreen';
import Login from './src/screens/login/Login';
import Error from './src/screens/error/Error';
import StackScreen from './src/screens/storage/StackScreen';
import InfoScreen from './src/screens/wechat/InfoScreen';
import HomeTab from './src/screens/tabScreens/HomeTab';
import DiscoveryTab from './src/screens/tabScreens/DiscoveryTab';
import AccountTab from './src/screens/tabScreens/AccountTab';
import EventTab from './src/screens/tabScreens/EventTab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { ContextProvider } from "./src/context/ContextProvider";
import { LogBox } from 'react-native';
import { DiscoveryIconActive, DiscoveryIconUnActive, EventIconUnActive, EventIconActive, MineIconUnActive, MineIconActive, HomeIconActive, HomeIconUnActive } from "./src/icons"
import { containStackRoutes } from "./src/router/index"
LogBox.ignoreLogs(['new NativeEventEmitter']);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeTabRoutes = [
  {
    name: 'HomeTab',
    component: HomeTab,
    option: { title: '首页' },
  },
  {
    name: 'DiscoveryTab',
    component: DiscoveryTab,
    option: { title: '社区' },
  },
  {
    name: 'EventTab',
    component: EventTab,
    option: { title: '活动' },
  },
  {
    name: 'AccountTab',
    component: AccountTab,
    option: { title: '账户' },
  },
];
const IconSet = {
  activeHomeTab: <HomeIconActive width="70%" height="70%" />,
  activeDiscoveryTab: <DiscoveryIconActive width="69%" height="69%" />,
  activeEventTab: <EventIconActive width="65%" height="65%" />,
  activeAccountTab: <MineIconActive width="66%" height="66%" />,
  unActiveHomeTab: <HomeIconUnActive width="82%" height="82%" />,
  unActiveDiscoveryTab: <DiscoveryIconUnActive width="65%" height="65%" />,
  unActiveEventTab: <EventIconUnActive width="64%" height="64%" />,
  unActiveAccountTab: <MineIconUnActive width="65%" height="65%" />
}
const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgba(10,10,10,0.95)', inactiveTintColor: "rgba(10,10,10,0.5)",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return focused ? IconSet["active" + route.name] : IconSet["unActive" + route.name];
        },
      })}>
      {
        HomeTabRoutes.map(item => {
          return (
            <Tab.Screen
              key={item.name}
              name={item.name}
              options={{ title: item.option.title }}
              component={item.component}
            />
          );
        })
      }
    </Tab.Navigator >
  );
};

const linking = {
  prefixes: ['foundation://'],
  config: {
    initialRouteName: 'HomeTabs',
    screens: {
      InfoScreen: {
        path: 'InfoScreen/:id'
      }
    }
  }
};
const App = () => {
  return (
    <Provider store={Store}>
      <ContextProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer
            linking={linking}>
            <Stack.Navigator>
              {/* 将tab页装载在根节点Stack页面; */}
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ header: () => null, title: '登陆' }}
              />
              <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ header: () => null, title: '首页' }}
              />
              {containStackRoutes.map(item => {
                return (
                  <Stack.Screen
                    key={item.name}
                    name={item.name}
                    options={{
                      title: item.option.title,
                    }}
                    component={item.component}
                  />
                );
              })}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ContextProvider>
    </Provider >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;