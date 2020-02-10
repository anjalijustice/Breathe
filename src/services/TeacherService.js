export default class TeacherService {
    static getTeachers() {
        return fetch('https://breathe-api.herokuapp.com/teachers').then((teachers) => {return teachers.json()});
    }
}