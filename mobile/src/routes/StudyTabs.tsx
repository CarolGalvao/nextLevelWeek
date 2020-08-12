import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList';
import Favorite from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const optsProffys: BottomTabNavigationOptions = {
    tabBarLabel: 'Proffys',
    tabBarIcon: ({ color, size, focused }) => <Ionicons name="ios-easel" color={focused ? '#8257E5' : color} size={size} />
  }

const optsFavorite: BottomTabNavigationOptions = {
    tabBarLabel: 'Favoritos',
    tabBarIcon: ({ color, size, focused }) => <Ionicons name="ios-heart" color={focused ? '#8257E5' : color} size={size} />
  }


function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                inconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}>
            <Screen 
                name="Proffys" 
                component={TeacherList} 
            ></Screen>
            <Screen name="Favorites" component={Favorite} 
            ></Screen>
        </Navigator>
    );
}

export default StudyTabs;