import React, {useEffect} from "react";
import AdminTab1 from "./AdminTab1";
import AdminTab2 from "./AdminTab2";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { removeToken } from '../components/auth/Storage';
import { StyleSheet, Text } from "react-native";

function AdminDashboard({navigation}) {
  const Tab = createBottomTabNavigator();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={() => {
            removeToken();
            navigation.navigate("Welcome");
          }}
           style={style.logout}
        >
          Logout
        </Text>
      ),
    });
  })

  return (
  
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          options={{
            tabBarActiveBackgroundColor: "#b9bff5",
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home" color="#3f1bdf" size="1.3rem" />
            ),
          }}
          component={AdminTab1}
        />
        <Tab.Screen
          name="Polls"
          options={{
            tabBarActiveBackgroundColor: "#b9bff5",
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons
                name="analytics-outline"
                color="#3f1bdf"
                size="1.3rem"
              />
            ),
          }}
          component={AdminTab2}
        />
      </Tab.Navigator>
  
  );
}

export default AdminDashboard;

const style = StyleSheet.create({
  logout: {
    margin: "10px",
    fontSize: "1rem",
    color: "#5629f7",
    backgroundColor: "#e3e5f8",
    padding: "5px",
    borderRadius: "5px",
  },
});
