import React from "react";
import { Text } from "@rneui/base";
import { FlatList, View } from "react-native";
import corrida from "../data/corrida";
import { ListItem } from "@rneui/base";
import { Avatar, Button, Icon } from "@rneui/base";

export default props => {
    // console.warn(Object.keys(props.route.params.idItem));
    // console.warn(props.route.params)

    // Pegamos as voltas
    let vol = [];
    const piloto = props.route.params.piloto;
    let p1 = corrida.filter((p) => {
        return p && p.id_piloto === piloto;
    })
    vol.push(p1)

    const avatar = 'https://cdn.pixabay.com/photo/2012/04/16/12/07/go-kart-35701_960_720.png';

    showUser = (codigo, vol) => {
        props.navigation.navigate('UserEdit', { piloto: codigo, volta: vol });
    }

    const lista = vol[0].map((item) => {
        return (
            <ListItem
                key={item.n_volta}
                bottomDivider>
                <Avatar source={{ uri: avatar }} />
                <ListItem.Content>
                    <ListItem.Title>
                        <Text>{ item.hora_volta } - { item.id_piloto } - { item.nome } </Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        Volta: { item.n_volta } - Tempo: { item.tempo_volta } VM: { item.vm_volta }
                    </ListItem.Subtitle>
                </ListItem.Content>
                <Button onPress={() => showUser(item.id_piloto, item.n_volta)} type="clear" icon={<Icon name="edit" size={25} color="orange" />} />
            </ListItem>
        )
    })

    return (
        <View>
            {/* <FlatList
                keyExtractor={piloto => piloto[0].n_volta}
                data={vol[0]}
                renderItem={voltasPiloto}
            /> */}
            {lista}
        </View>
    )
}