/**
 * Programado por Rafael Coqueiro
 * Criado em 28 de Outubro de 2022
 */

import React from "react";
import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserForm from "./views/UserForm";
import UserList from "./views/UserList";
import { Button, Icon } from "@rneui/themed";
import UserEdit from './views/UserEdit';
import { PilotosProvider } from "./context/PilotosContext";
import Principal from "./views/Principal";
import Chegada from './views/Chegada'


const Stack = createNativeStackNavigator();
export default props => {
    return (
        <PilotosProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="chegada"
                    screenOptions={screenoption}>
                    <Stack.Screen
                        name="UserList" component={UserList}
                        options={({navigation}) => {
                            return {
                                title: "Corrida Finalizada",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate('UserForm')}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm" component={UserForm}
                        options={{
                            title: "Voltas do Piloto"
                        }}
                    />
                    <Stack.Screen
                        name="UserEdit" component={UserEdit}
                        options={{
                            title: "Editar Informações do Piloto"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PilotosProvider>
    )
}

const screenoption = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' }
}