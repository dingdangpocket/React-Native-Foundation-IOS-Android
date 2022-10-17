import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Login from './src/screens/login/Login';
import HomeTab from './src/screens/tabScreens/HomeTab';
import CommunityTab from './src/screens/tabScreens/CommunityTab';
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
import { DiscoveryIconActive, DiscoveryIconUnActive, CommunityIconActive, CommunityIconUnActive, EventIconUnActive, EventIconActive, MineIconUnActive, MineIconActive, HomeIconActive, HomeIconUnActive } from "./src/icons"
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
    name: 'CommunityTab',
    component: CommunityTab,
    option: { title: '社区' },
  },
  {
    name: 'DiscoveryTab',
    component: DiscoveryTab,
    option: { title: '探索' },
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
  activeCommunityTab: <CommunityIconActive width="69%" height="69%" />,
  activeEventTab: <EventIconActive width="65%" height="65%" />,
  activeAccountTab: <MineIconActive width="66%" height="66%" />,
  unActiveHomeTab: <HomeIconUnActive width="82%" height="82%" />,
  unActiveCommunityTab: <CommunityIconUnActive width="65%" height="65%" />,
  unActiveEventTab: <EventIconUnActive width="64%" height="64%" />,
  unActiveAccountTab: <MineIconUnActive width="65%" height="65%" />,
  unActiveDiscoveryTab: <DiscoveryIconUnActive width="75%" height="75%" />,
  activeDiscoveryTab: <DiscoveryIconActive width="78%" height="78%" />
}
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="DiscoveryTab"
      detachInactiveScreens={false}
      // sceneContainerStyle={{backgroundColor:"red"}}
      tabBarOptions={{
        activeTintColor: 'rgba(10,10,10,0.9)',
        inactiveTintColor: "rgba(10,10,10,0.5)",
        labelStyle: { fontSize: 14 },
        style: { height: 55 }
        // activeBackgroundColor: "rgba(10,10,0,0.9)",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return focused ? IconSet["active" + route.name] : IconSet["unActive" + route.name];
        },
        tabBarButton: (props) => <TouchableOpacity activeOpacity={0.85} {...props} />,
        tabBarBadge: "1",
        tabBarBadgeStyle: {
          maxWidth: 15,
          maxHeight: 15,
          fontSize: 9,
          lineHeight: 15,
          backgroundColor: "rgba(255,51,0,0.9)"
        }
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