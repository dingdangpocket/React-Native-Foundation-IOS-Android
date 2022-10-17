import { useContext } from "react"
import { TouchableOpacity, } from 'react-native';
import { ContentContext } from "../context/ContextProvider";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DiscoveryIconActive, DiscoveryIconUnActive, CommunityIconActive, CommunityIconUnActive, EventIconUnActive, EventIconActive, MineIconUnActive, MineIconActive, HomeIconActive, HomeIconUnActive } from "../icons"
import { containStackRoutes } from "../router/index"
import HomeTab from '../screens/tabScreens/HomeTab';
import CommunityTab from '../screens/tabScreens/CommunityTab';
import DiscoveryTab from '../screens/tabScreens/DiscoveryTab';
import AccountTab from '../screens/tabScreens/AccountTab';
import EventTab from '../screens/tabScreens/EventTab';
import Login from '../screens/login/Login';
import HomeTabRoutes from './HomeTabsRoutes';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeTabRoutesConfig = [
    {
        name: 'HomeTab',
        component: HomeTab,
        option: { title: '首页' },
        tabBarBadge: null,
    },
    {
        name: 'CommunityTab',
        component: CommunityTab,
        option: { title: '社区' },
        tabBarBadge: "10",
    },
    {
        name: 'DiscoveryTab',
        component: DiscoveryTab,
        option: { title: '探索' },
        tabBarBadge: "8",
    },
    {
        name: 'EventTab',
        component: EventTab,
        option: { title: '活动' },
        tabBarBadge: "19",
    },
    {
        name: 'AccountTab',
        component: AccountTab,
        option: { title: '账户' },
        tabBarBadge: null,
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
            })}>
            {
                HomeTabRoutes.map(item => {
                    return (
                        <Tab.Screen
                            key={item.name}
                            name={item.name}
                            options={{
                                title: item.option.title, tabBarBadge: item.tabBarBadge,
                                tabBarBadgeStyle: {
                                    maxWidth: 17,
                                    maxHeight: 15,
                                    fontSize: 9,
                                    lineHeight: 15,
                                    backgroundColor: "rgba(255,51,0,0.9)"
                                }
                            }}
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
const RoutesNav = () => {
    const { state, dispatch } = useContext(ContentContext);
    console.log("state", state.communityTabBarBadge);
    return (
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
                    component={HomeTabRoutes}
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
    );
};
export default RoutesNav;
