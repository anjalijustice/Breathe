import { API_URL } from './contants';

export default class TeacherService {
    static getTeachers() {
        return fetch(`${API_URL}/teachers`)
            .then((teachers) => {return teachers.json()})
            .catch((e) => {console.log(e); return [];});
    }
}