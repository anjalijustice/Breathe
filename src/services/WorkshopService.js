import { API_URL } from './contants';

export default class WorkshopService {
    static getWorkshops() {
        return fetch(`${API_URL}/workshops`)
            .then((workshops) => {return workshops.json()})
            .catch((e) => {console.log(e); return [];});
    }
}
