import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from 'src/screens/tabScreens/HomeTab';
import CommunityTab from 'src/screens/tabScreens/CommunityTab';
import DiscoveryTab from 'src/screens/tabScreens/DiscoveryTab';
import AccountTab from 'src/screens/tabScreens/AccountTab';
import EventTab from 'src/screens/tabScreens/EventTab';
import {useContext} from 'react';
import {ContentContext} from 'src/context/ContextProvider';
import {
  DiscoveryIconActive,
  DiscoveryIconUnActive,
  CommunityIconActive,
  CommunityIconUnActive,
  EventIconUnActive,
  EventIconActive,
  MineIconUnActive,
  MineIconActive,
  HomeIconActive,
  HomeIconUnActive,
} from 'src/icons';
const Tab = createBottomTabNavigator();
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
  activeDiscoveryTab: <DiscoveryIconActive width="78%" height="78%" />,
};
const HomeTabsRoutes = () => {
  const {state} = useContext(ContentContext);
  const HomeTabRoutesConfig = [
    {
      name: 'HomeTab',
      component: HomeTab,
      option: {title: '首页'},
      tabBarBadge: null,
    },
    {
      name: 'CommunityTab',
      component: CommunityTab,
      option: {title: '社区'},
      tabBarBadge: state.communityTabBarBadge,
    },
    {
      name: 'DiscoveryTab',
      component: DiscoveryTab,
      option: {title: '探索'},
      tabBarBadge: null,
    },
    {
      name: 'EventTab',
      component: EventTab,
      option: {title: '活动'},
      tabBarBadge: state.eventTabBarBadge,
    },
    {
      name: 'AccountTab',
      component: AccountTab,
      option: {title: '账户'},
      tabBarBadge: null,
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="DiscoveryTab"
      detachInactiveScreens={false}
      // sceneContainerStyle={{backgroundColor:"red"}}
      tabBarOptions={{
        activeTintColor: 'rgba(10,10,10,0.9)',
        inactiveTintColor: 'rgba(10,10,10,0.5)',
        labelStyle: {fontSize: 14},
        style: {height: 55},
        // activeBackgroundColor: "rgba(10,10,0,0.9)",
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return focused
            ? IconSet['active' + route.name]
            : IconSet['unActive' + route.name];
        },
        tabBarButton: props => (
          <TouchableOpacity activeOpacity={0.85} {...props} />
        ),
      })}>
      {HomeTabRoutesConfig.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.option.title,
              tabBarBadge: item.tabBarBadge,
              tabBarBadgeStyle: {
                maxWidth: 17,
                maxHeight: 15,
                fontSize: 9,
                lineHeight: 15,
                backgroundColor: 'rgba(255,51,0,0.9)',
              },
            }}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default HomeTabsRoutes;
