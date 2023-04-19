class DataService{

    static DATA_URL = 'https://6437a2bd0c58d3b145753906.mockapi.io/Series';

    static getSeries(){
        return fetch(this.DATA_URL).then(resp => resp.json())
    }

    static putSerie(serie){
        return fetch(this.DATA_URL + '/' + serie.id, {method: 'PUT', headers: {'content-type': 'application/json'}, body: JSON.stringify(serie) })
        .then(resp => resp.json());
    }

}