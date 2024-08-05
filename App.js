/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

import SpalshScreen from './views/screens/authentication/SpalshScreen';
import {navigationRef} from './views/lib/Rootnavigation';
import Login from './views/screens/authentication/Login';
import Register from './views/screens/authentication/Resister';
import Dashboard from './views/screens/dashboard/Dashboard';
import Loader from './views/common/Loader';
import CustomTabBar from './views/common/CustomTabBar';
import User from './views/screens/dashboard/User';
import Attendance from './views/screens/Attendance/Attendance';
import Chat from './views/screens/chat/chat';
import configureStore from './views/lib/ConfigureStore';
import Scanner from './views/screens/scanner/Scanner';
import {orange} from './views/lib/Constants';
import List from './views/screens/List/List';
import Alarm from './views/screens/Alarm/Alarm';
import Inventory from './views/screens/Inventory/Inventory';
import Dispatch from './views/screens/Inventory/Dispatch';
import Indent from './views/screens/Inventory/Indent';

import Production from './views/screens/Inventory/Production';
import Received from './views/screens/Inventory/Received';
import ToDepartment from './views/screens/Inventory/ToDepartment';
import IssueDosing from './views/screens/Inventory/IssueDosing';
import Dosing from './views/screens/Inventory/Dosing';
import ConsumptionatDosing from './views/screens/Inventory/ConsumptionatDosing';
import ReIndent from './views/screens/Inventory/ReIndent';
import Barcode from './Barcode/Barcode';
import ReturnDepartment from './views/screens/Inventory/ReturnDepartment';
import ReturnWarehouse from './views/screens/Inventory/ReturnWarehouse';
import WarehousetoWarehouse from './views/screens/Inventory/WarehousetoWarehouse';
import AddbarcodetoDispatch from './views/screens/Inventory/AddbarcodetoDispatch';
import SubmitReceive from './views/screens/Inventory/SubmitReceive';
import Machinaries from './views/screens/Machinaries/Machinaries';
import MachineIndent from './views/screens/Machinaries/MachineIndent';
import MachinariesRecieved from './views/screens/Machinaries/MachinariesRecieved';
import ReIndentMachinaries from './views/screens/Machinaries/ReIndentMachinaries';
import ReturnMachinaries from './views/screens/Machinaries/ReturnMachinaries';
import ReceiveTransfer from './views/screens/Machinaries/ReceiveTransfer';
import WarehousedamageReport from './views/screens/Inventory/WarehousedamageReport';
import DepartmentdamageReport from './views/screens/Inventory/DepartmentdamageReport';
import Approval from './views/screens/Inventory/Approval';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const store = configureStore();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="SpalshScreen"
            component={SpalshScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: true,
              headerStyle: {
                // backgroundColor: '#32356a',
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Attendance"
            component={Attendance}
            options={{
              headerShown: true,
              headerStyle: {
                // backgroundColor: '#32356a',
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Scanner"
            component={Scanner}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Alarm"
            component={Alarm}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Inventory"
            component={Inventory}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Dispatch"
            component={Dispatch}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="AddDispatch"
            component={AddbarcodetoDispatch}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Indent"
            component={Indent}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Approval"
            component={Approval}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Machine Indent"
            component={MachineIndent}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Production"
            component={Production}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Submit"
            component={Received}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Received"
            component={SubmitReceive}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Machinaries Recieved"
            component={MachinariesRecieved}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Inter-Department Transfer"
            component={ToDepartment}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Warehouse To Warehouse"
            component={WarehousetoWarehouse}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Issue to Dosing Location"
            component={IssueDosing}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Inter-Dosing Location Transfer"
            component={Dosing}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Consumption at Dosing Location"
            component={ConsumptionatDosing}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="ReIndent"
            component={ReIndent}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="ReIndent Machinaries"
            component={ReIndentMachinaries}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Return Machinaries"
            component={ReturnMachinaries}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Receive Transfer"
            component={ReceiveTransfer}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Barcode"
            component={Barcode}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Warehouse damage Report"
            component={WarehousedamageReport}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Department damage Report"
            component={DepartmentdamageReport}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Return To Warehouse"
            component={ReturnWarehouse}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Return To Department"
            component={ReturnDepartment}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="Machinaries"
            component={Machinaries}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: orange,
              },
              headerTintColor: 'white', // Text color
              headerTitleStyle: {
                color: 'white', // Title text color
              },
            }}
          />
          <Stack.Screen
            name="TabNavigatior"
            component={TabNavigatior}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <Loader />
      </Provider>
    </NavigationContainer>
  );
}

function TabNavigatior() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
