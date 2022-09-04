import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../Container/HomeScreen";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen},
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default AppNavigation = createAppContainer(AppNavigator);