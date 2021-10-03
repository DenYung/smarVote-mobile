import React from "react";
import AdminTab1 from "./AdminTab1";
import AdminTab2 from "./AdminTab2";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function AdminDashboard() {
  const Tab = createBottomTabNavigator();

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
            <Ionicons name="analytics-outline" color="#3f1bdf" size="1.3rem" />
          ),
        }}
        component={AdminTab2}
      />
    </Tab.Navigator>
  );
}

export default AdminDashboard;
