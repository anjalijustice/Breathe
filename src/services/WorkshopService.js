export default class WorkshopService {
    static getWorkshops() {
        return fetch('http://127.0.0.1:8080/workshops').then((workshops) => {return workshops.json()});
    }
}
