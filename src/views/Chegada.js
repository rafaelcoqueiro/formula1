import React from "react";

import corrida from "../data/corrida";
import UserList from "./UserList";

export default props => {

    convertTimeToMs = (tempo) => {
        var minuto = tempo.split(':');
        var segundo = minuto[1].split('.');
        var total = parseInt(minuto[0] * 60 * 1000) + parseInt(segundo[0] * 1000) + parseInt(segundo[1])
        return total;
    }

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
    
    <UserList dados={tempos} />
}