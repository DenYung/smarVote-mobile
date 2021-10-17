import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screen/Welcome";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import AdminDashboard from "./screen/AdminDashboard";
import StudentFeed from "./screen/StudentFeed";
import AdminLogin from "./screen/AdminLogin";

export default function App() {
  
  const Stack = createNativeStackNavigator();
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Dashboard"
          options={{
            headerLeft: false,
            headerStyle: {
              backgroundColor: "#073494",
            },
            headerTintColor: "#fff"
          }}
          component={AdminDashboard}
        />
        <Stack.Screen
          name="Feed"
          options={{ headerLeft: false }}
          component={StudentFeed}
        />
        <Stack.Screen name="Admin" component={AdminLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
