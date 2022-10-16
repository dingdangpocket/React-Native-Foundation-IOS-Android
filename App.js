import React, { useContext, useEffect } from 'react';
import { Image, StyleSheet, SafeAreaView } from 'react-native';
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
import { DiscoveryIconActive, DiscoveryIconUnActive, EventIconUnActive, EventIconActive, MineIconUnActive, MineIconActive, HomeIconActive,HomeIconUnActive } from "./src/icons"

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
const StorageStackRoutes = [
  {
    name: 'StackScreen',
    component: StackScreen,
    option: { title: 'StackPages' },
  }
];
const HomeStackRoutes = [
  {
    name: 'TheoryDescScreen',
    component: TheoryDescScreen,
    option: { title: 'WebView网页' },
  },
  {
    name: 'IncidentDescScreen',
    component: IncidentDescScreen,
    option: { title: '视频集成' },
  },
  {
    name: 'AudioScreen',
    component: AudioScreen,
    option: { title: '音频集成' },
  },
  {
    name: 'ImagePicker',
    component: ImagePicker,
    option: { title: '访问相机集成' },
  },

  {
    name: 'ImageSaveScreen',
    component: ImageSaveScreen,
    option: { title: '图片保存' },
  }
];
const CameraStackRoutes = [];
const WechatStackRoutes = [
  {
    name: 'InfoScreen',
    component: InfoScreen,
    option: { title: 'InfoScreen' },
  }
];
const ErrorStackRoutes = [
  {
    name: 'Error',
    component: Error,
    option: { title: '错误页面' },
  }
];
const containStackRoutes = [
  ...HomeStackRoutes,
  ...StorageStackRoutes,
  ...WechatStackRoutes,
  ...CameraStackRoutes,
  ...ErrorStackRoutes
]

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: 'rgba(10,10,10,0.95)', inactiveTintColor: "rgba(10,10,10,0.5)" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'HomeTab') {
            icon = focused ? <HomeIconActive width="70%" height="70%" /> : <HomeIconUnActive width="82%" height="82%" />;
          } else if (route.name === 'DiscoveryTab') {
            icon = focused ? <DiscoveryIconActive width="69%" height="69%" /> : <DiscoveryIconUnActive width="65%" height="65%" />;
          } else if (route.name == 'EventTab') {
            icon = focused ? <EventIconActive width="65%" height="65%" /> : <EventIconUnActive width="64%" height="64%" />;
          } else if (route.name == 'AccountTab') {
            icon = focused ? <MineIconActive width="66%" height="66%" /> : <MineIconUnActive width="65%" height="65%" />;
          }
          return icon;
        },
      })}>
      {HomeTabRoutes.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            options={{ title: item.option.title }}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
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
  add: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
  },
});
export default App;