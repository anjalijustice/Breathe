import AdminService from './AdminService';
import FavoriteService from './FavoriteService';
import UserService from './UserService';
import WorkshopService from './WorkshopService';
import TeacherService from './TeacherService';

const Services = {
    Admins: AdminService,
    Favorites: FavoriteService,
    Users: UserService,
    Workshops: WorkshopService,
    Teachers: TeacherService,
}

export default Services;