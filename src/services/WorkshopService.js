export default class WorkshopService {
    static getWorkshops() {
        return fetch('https://breathe-api.herokuapp.com/workshops').then((workshops) => {return workshops.json()});
    }
}
