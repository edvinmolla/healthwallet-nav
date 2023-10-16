import * as React from "react";
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import Feed from "./screens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Settings from "./screens/Settings";
import Notifications from "./screens/Notifications";
import { Ionicons } from "@expo/vector-icons";
import TweetDetailScreen from "./screens/homeStack/TweetDetailScreen";
import { Image, Pressable, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import Payments from "./screens/Payments";
import ChartScreen from "./screens/ChartScreen";
import ConnectScreen from "./screens/ConnectScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecommendationsScreen from "./screens/RecommendationsScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
            <HomeStack.Screen
                name="TweetDetailScreen"
                component={TweetDetailScreen}
                options={{
                    presentation: "modal",
                    headerTitle: "Tweet Details",
                    headerShown: true,
                }}
            />
        </HomeStack.Navigator>
    );
}

// Tabs
const Tab = createBottomTabNavigator();

function TabsGroup({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen
                name="Dr. Williams"
                component={TopTabsGroup}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={28}
                            color={focused ? "black" : "gray"}
                        />
                    ),
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()}>
                            <Image
                                source={{ uri: "https://media1.popsugar-assets.com/files/thumbor/qDtwqjvdIP1-DCMpkZcctNz5-ps=/640x480/top/filters:format_auto():quality(85):extract_cover()/2018/09/18/945/n/1922507/87e076fb06b8edb2_IMB_hdR0zT.GIF" }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100,
                                    marginLeft: 15,
                                }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <Tab.Screen name="Chart" component={ChartScreen}
              options={({ route }) => ({
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="file-document-multiple"
                    size={24}
                    color={focused ? "black" : "gray"}
                  />
                ),
              })}
            />
            <Tab.Screen name="Connect" component={ConnectScreen}
                   
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                      <MaterialCommunityIcons
                        name="transit-connection-horizontal"
                        size={24}
                        color={focused ? "black" : "gray"}
                      />
                    ),
                  })}
            
            />
            <Tab.Screen name="Recommendations" component={RecommendationsScreen}
                 options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                      <MaterialCommunityIcons
                        name="vector-point"
                        size={24}
                        color={focused ? "black" : "gray"}
                      />
                    ),
                  })}    />
            <Tab.Screen name="Profile" component={ProfileScreen}
               options={({ route }) => ({
                tabBarIcon: ({ focused }) => (
                  <FontAwesome
                    name="user-circle"
                    size={24}
                    color={focused ? "black" : "gray"}
                  />
                ),
              })}   />
        </Tab.Navigator>
    );
}

// Drawer

const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Feed" component={HomeStackGroup} />
            <Drawer.Screen name="Payments" component={Payments} />
            <Drawer.Screen name="Payments1" component={Payments} />
            <Drawer.Screen name="Payments2" component={Payments} />
            <Drawer.Screen name="Payments3" component={Payments} />
        </Drawer.Navigator>
    );
}

// Top Tabs

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: "capitalize",
                    fontWeight: "bold",
                },
                tabBarIndicatorStyle: {
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: "#1DA1F2",
                },
            }}
        >
            <TopTabs.Screen
                name="main"
                component={Feed}
                options={{
                    tabBarLabel: "something",
                }}
            />
            <TopTabs.Screen name="something else" component={Payments} />
            <TopTabs.Screen name="another thing" component={Payments} />
        </TopTabs.Navigator>
    );
}

export default function Navigation() {
    const theme = useColorScheme();
    return (
        <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
            <StatusBar style="auto" />
            {/* <HomeStackGroup /> */}
            <DrawerGroup />
        </NavigationContainer>
    );
}