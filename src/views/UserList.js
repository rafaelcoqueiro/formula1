import React from "react";
import { Avatar, Button, Text, Icon } from "@rneui/base";
import { FlatList, View } from "react-native";
import corrida from "../data/corrida";
import { ListItem } from "@rneui/themed";
import { convertMsToTime, convertTimeToMs } from "../components/funcoes";

export default props => {
    //console.warn(Object.keys(props))
    const avatar = 'https://cdn.pixabay.com/photo/2012/04/16/12/07/go-kart-35701_960_720.png';

    const piloto1 = piloto => piloto.id_piloto === '038';
    const massa = corrida.filter(piloto1);
    const tempo_massa = massa.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0);

    const piloto2 = piloto => piloto.id_piloto === '033';
    const barrichello = corrida.filter(piloto2);
    const tempo_barichello = barrichello.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0);

    const piloto3 = piloto => piloto.id_piloto === '002';
    const raikonnen = corrida.filter(piloto3);
    const tempo_raikonnen = raikonnen.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)

    const piloto4 = piloto => piloto.id_piloto === '023';
    const webber = corrida.filter(piloto4);
    const tempo_webber = webber.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)

    const piloto5 = piloto => piloto.id_piloto === '015';
    const alonso = corrida.filter(piloto5);
    const tempo_alonso = alonso.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)

    const piloto6 = piloto => piloto.id_piloto === '011';
    const vettel = corrida.filter(piloto6);
    const tempo_vettel = vettel.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)

    let tempos = [
        { id: '038', tempo: tempo_massa },
        { id: '033', tempo: tempo_barichello },
        { id: '002', tempo: tempo_raikonnen },
        { id: '023', tempo: tempo_webber },
        { id: '015', tempo: tempo_alonso },
        { id: '011', tempo: tempo_vettel}
    ];

    tempos.sort((a, b) =>{
        return a.tempo - b.tempo;
    });

    const ids = tempos.map(p => p.id);
    let nomes = [];

    // Pegamos todos os nomes
    for (var i = 0; i < ids.length; i++) {
        let p1 = corrida.find((p) => {
            return p && p.id_piloto === ids[i];
        })
        nomes.push(p1.nome)
    }

    // Pegamos as voltas
    let x = 0; let p1 = []; let tvoltas = [];
    for (i = 0; i < ids.length; i++) {
        p1[i] = corrida.find((p) => {
            if (p.id_piloto === ids[i]) x++;
        })
        tvoltas.push(x);
        x = 0;
    }

    // Formamos o array principal
    var dadosCorrida = [];
    for (i = 0; i < tempos.length; i++) {
        dadosCorrida.push({
            posicao: i + 1,
            codigo: ids[i],
            nome: nomes[i],
            voltas: tvoltas[i],
            tempo: tempos[i].tempo
        })
    }

    showUser = (codigo) => {
        props.navigation.navigate('UserForm', { piloto: codigo });
    }

    dadosPilotos = ({ item: dadosCorrida }) => {
        return (
            <ListItem
                key={dadosCorrida.id}
                bottomDivider>
                <Avatar source={{ uri: avatar }} />
                <ListItem.Content>
                    <ListItem.Title>
                        <Text>{ dadosCorrida.posicao }&ordm; - { dadosCorrida.codigo } - { dadosCorrida.nome } </Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>{ dadosCorrida.voltas } Voltas - Tempo total: { convertMsToTime(dadosCorrida.tempo) } minutos </ListItem.Subtitle>
                </ListItem.Content>
                <Button onPress={() => showUser(dadosCorrida.codigo)} type="clear" icon={<Icon name="edit" size={25} color="orange" />} />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={piloto => piloto.posicao.toString()}
                data={dadosCorrida}
                renderItem={dadosPilotos}
            />
        </View>
    )
}