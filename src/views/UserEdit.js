import React, { useState, useContext, setState } from "react";
import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";
import PilotoContext from "../context/PilotosContext";
import corrida from '../data/corrida';

export default props => {
    // const { state, dispatch } = useContext(PilotoContext)

    const initialState = useState(corrida[0]);

    // console.warn('Context: ', state);

    let vol = [];
    const piloto = props.route.params.piloto;
    let p1 = corrida.filter((p) => {
        return p && p.id_piloto === piloto && p.n_volta === props.route.params.volta;
    })
    vol.push(p1)
    // console.warn(vol[0][0].n_volta)

    const [hora, setHora] = useState(vol[0][0].hora_volta);
    const [nome, setNome] = useState(vol[0][0].nome);
    const [tvolta, setTvolta] = useState(vol[0][0].tempo_volta);
    const [vmvolta, setVmvolta] = useState(vol[0][0].tempo_volta);

    const editUser = () => {
        //props.navigation.navigate('UserList')
        // Alert.alert(
        //     "Sucesso!",
        //     "Dados modificados com sucesso.",
        //     [
        //         { 
        //             text: "Show!", 
        //             onPress: () => {
        //                 dispatch({
        //                     type: 'editPilot',
        //                     payload: corrida
        //                 })
        //             }
        //         }
        //     ]
        // )
        let index = corrida.findIndex(e => e.id_piloto === vol[0][0].id_piloto && e.n_volta === vol[0][0].n_volta);
        corrida[index] = { ...corrida[index], key: value }
    }
    let index = corrida.findIndex(e => e.id_piloto === vol[0][0].id_piloto && e.n_volta === vol[0][0].n_volta);
        // const data = [...initialState];
        // const e = {...data[index]};
        // e.nome = 'Rafael';
        // data[index] = e;
        // setState({initialState: data});
        //corrida.splice(index, 1, {nome: 'Rafael'})
        console.warn(corrida)

    return(
        <View style={styles.form}>
            <Text style={styles.title}>Hora</Text>
            <TextInput
                onChangeText={h => setH(h)}
                placeholder="Hora da corrida. Ex.: 05:02:50.857"
                placeholderTextColor='#ddd'
                value={hora}
                style={styles.input}
            />

            <Text style={styles.title}>Nome do Piloto</Text>
            <TextInput
                onChangeText={n => setNome({n})}
                placeholder="Nome do Piloto"
                placeholderTextColor='#ddd'
                value={nome}
                style={styles.input}
            />

            <Text style={styles.title}>Volta</Text>
            <TextInput
                placeholderTextColor='#ddd'
                value={vol[0][0].n_volta.toString()}
                style={styles.input}
                editable={false}
            />

            <Text style={styles.title}>Tempo da volta n&ordm; {vol[0][0].n_volta.toString()}</Text>
            <TextInput
                onChangeText={n => setTvolta({n})}
                placeholder="Tempo da volta"
                placeholderTextColor='#ddd'
                value={tvolta}
                style={styles.input}
            />

            <Text style={styles.title}>Velocidade média da volta n&ordm; {vol[0][0].n_volta.toString()}</Text>
            <TextInput
                onChangeText={n => setVmvolta({n})}
                placeholder="Velocidade média da volta"
                placeholderTextColor='#ddd'
                value={vmvolta}
                style={styles.input}
                keyboardType=""
            />

            <Button
                title="Salvar"
                onPress={() => {
                    editUser()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: { padding: 12 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 },
    title: { fontSize: 16, fontWeight: 'bold' }
})