import React, { useMemo } from 'react';
import ICONS from '@utils/icons';
import AppIcon from '@components/icons/AppIcon';
import {  HEIGHTS, SPACING } from '@utils/constants';
import { RootStackParamList } from './HomeParamList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/homeTabScreens/HomeScreen';
import EditorScreenScreen from '@screens/homeTabScreens/EditorScreenScreen';
import CustomiseScreen from '@screens/homeTabScreens/CustomiseScreen';
import GalleryScreen from '@screens/homeTabScreens/GalleryScreen';
import WardrobeScreen from '@screens/homeTabScreens/WardrobeScreen';
import NotificationScreen from '@screens/homeTabScreens/NotificationScreen';
import InboxScreen from '@screens/homeTabScreens/InboxScreen';
import { adaptiveFont, adaptiveSize } from '@utils/scaleUtils';
import { AppColor } from 'colors/AppColor';
import { StyleSheet, Text, View } from 'react-native';
import { RouteConfig } from '@models/RouteConfig';
import { APP_COLORS } from '../../colors/colors'

export type MainStackParamList = RootStackParamList 

export type HomeParamList = {
  Home: undefined;
  Editor:undefined;
  Customise:undefined;
  Wardrobe:undefined;
  Notification:undefined;
  Gallery:undefined;
  Inbox:undefined;
};

type BottomTabMainStack = MainStackParamList &
  HomeParamList 

const Stack = createNativeStackNavigator<BottomTabMainStack>();
const Tab = createBottomTabNavigator<HomeParamList>();

const ROUTES: Record<keyof HomeParamList, RouteConfig> = {
  Home: {
    component: HomeScreen,
    icon: ICONS.HOME,
  },
  Editor: {
    component: EditorScreenScreen,
    icon: ICONS.Editor,
  },
  Customise: {
    component: CustomiseScreen,
    icon: ICONS.Customise,
  },
  Gallery: {
    component: GalleryScreen,
    icon: ICONS.Gallery,
  },
  Wardrobe: {
    component: WardrobeScreen,
    icon: ICONS.Wardrobe,
  },
  Notification: {
    component: NotificationScreen,
    icon: ICONS.Notification,
  },
  Inbox: {
    component: InboxScreen,
    icon: ICONS.Inbox,
  },
};

const HomeTabs = () => {
  const colors = APP_COLORS;
  const styles = useMemo(() => createStyles(colors), [colors]);


  return (
    <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarLabel: ({focused}) => (
           <View style={[styles.activeIndicator,{borderBottomWidth:focused ? 5 : 0,}]} />
        ),
        tabBarIcon: ({ color,focused }) => {
          return (
            <AppIcon
              icon={ROUTES[route.name].icon}
              size={focused ? HEIGHTS.TAB_ACTIVE :  HEIGHTS.TAB_INACTIVE }
              style={{ color }}
            />
          );
        },
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
        headerShown: false,
        // tabBarShowLabel:false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.grayText,
        lazy: true,
      })}
    >
      {Object.keys(ROUTES).map((routeName) => (
        <Tab.Screen
          key={routeName}
          name={routeName as keyof HomeParamList}
          component={ROUTES[routeName as keyof HomeParamList].component}
        />
      ))}
    </Tab.Navigator>
  );
};

const HomeNavigator = () => <HomeTabs />;

export default HomeNavigator;

const createStyles = (colors: AppColor) =>
  StyleSheet.create({
    tabBarStyle: {
      paddingTop: adaptiveSize(SPACING.EXTRA_SMALL),
      borderWidth: 0,
      height:adaptiveSize(70,true),
      backgroundColor:colors.textColor
    },
    activeIndicator:{
      width:adaptiveSize(35),
      marginTop:SPACING.TINY,
      borderColor:colors.white
    },
    label: {
      fontSize: adaptiveFont(SPACING.SMALL),
      includeFontPadding: false,
      textAlign: 'center',
    },
  });
