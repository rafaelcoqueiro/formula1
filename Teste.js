import React from "react";
import { View, Text, StyleSheet } from "react-native";

import corrida from "./src/data/corrida";

export default props => {
    const piloto1 = piloto => piloto.id_piloto === '038';
    const massa = corrida.filter(piloto1);
    const tempo_massa = massa.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0);
    //console.warn(convertMsToTime(tempo_massa));

    const piloto2 = piloto => piloto.id_piloto === '033';
    const barrichello = corrida.filter(piloto2);
    const tempo_barichello = barrichello.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0);
    //console.warn(convertMsToTime(tempo_barichello));

    const piloto3 = piloto => piloto.id_piloto === '002';
    const raikonnen = corrida.filter(piloto3);
    const tempo_raikonnen = raikonnen.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)
    //console.warn(convertMsToTime(tempo_raikonnen));

    const piloto4 = piloto => piloto.id_piloto === '023';
    const webber = corrida.filter(piloto4);
    const tempo_webber = webber.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)
    //console.warn(convertMsToTime(tempo_webber));

    const piloto5 = piloto => piloto.id_piloto === '015';
    const alonso = corrida.filter(piloto5);
    const tempo_alonso = alonso.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)
    //console.warn(convertMsToTime(tempo_alonso));

    const piloto6 = piloto => piloto.id_piloto === '011';
    const vettel = corrida.filter(piloto6);
    const tempo_vettel = vettel.reduce((acumulado, t) => acumulado + convertTimeToMs(t.tempo_volta), 0)
    //console.warn(convertMsToTime(tempo_vettel));

    const tempo = convertTimeToMs('1:02.852');

    return (
        <View style={styles.container}>
            <View style={styles.txt}>
                { vettel.map(nome => <Text key={nome.id.toString()} style={styles.show}> {nome.id_piloto} </Text>) }
                
                <Text>
                        {
                            //console.warn(convertTimeToMs('1:02.852'))
                            //console.warn(convertMsToTime(tempo))
                        }
                </Text>
            </View>
        </View>
    )
}

convertTimeToMs = (tempo) => {
    var minuto = tempo.split(':');
    var segundo = minuto[1].split('.');
    var total = parseInt(minuto[0] * 60 * 1000) + parseInt(segundo[0] * 1000) + parseInt(segundo[1])
    return total;
}

function to2Digits(num) {
    return num.toString().padStart(2, '0');
}
    
function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let ms = milliseconds - (seconds * 1000);
    
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${to2Digits(minutes)}:${to2Digits(seconds)}.${ms}`;
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    show: {  flexDirection: 'column' },
    txt: { fontSize: 15, color: '#fff' }
})