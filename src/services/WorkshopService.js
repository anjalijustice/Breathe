// class WorkshopService {
//     getWorkshops() {
//         return fetch('http://127.0.0.1:8080/workshops').then((workshops) => {return workshops.json()});
//     }
// }

// export default WorkshopService;

export default function WorkshopService() {
    return fetch('http://127.0.0.1:8080/workshops').then((workshops) => {return workshops.json()});
};
