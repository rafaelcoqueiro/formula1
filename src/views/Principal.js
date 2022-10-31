import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default props => {
    console.warn(Object.keys(props))
    return (
        <>
        <View style={styles.container}>
            <View style={styles.texts}>
                <Text style={styles.title}>Seja</Text>
                <Text style={styles.subtitle}>&nbsp;Bem vindo!</Text>
            </View>
        </View>
        <View style={styles.vbotao}>
            <Button title="Colocação"
                onPress={() => props.navigation.navigate('chegada')}
                style={styles.botao}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    texts: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    title: { color: '#035C82', fontSize: 50, fontWeight: 'bold' },
    subtitle: { color: '#035C82', fontSize: 50 },
    vbotao: {flex: 1, margin: 10},
    botao: { padding: 25 }
})