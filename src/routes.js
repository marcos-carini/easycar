import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home/home";
import Passenger from "./screens/passenger/passenger";
import Ride from "./screens/ride/ride";
import RideDetail from "./screens/ride-detail/ride-detail";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="passenger"
          component={Passenger}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerTransparent: true,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="ride"
          component={Ride}
          options={{
            headerTitle: "Viagens Disponíveis",
            headerBackButtonDisplayMode: "minimal",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ride-detail"
          component={RideDetail}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerTransparent: true,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
