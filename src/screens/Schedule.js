import Services from '../services';
import WorkshopsView from './WorkshopsView';

class ScheduleScreen extends WorkshopsView {
    static navigationOptions = {
        title: 'Schedule',
    };

    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            dateSelected: '11',
            like: true,
            workshops: [],
            favoriteIds: [],
        }
    }

    fetchData = async () => {
        this.fetchFavorites();

        const workshops = await Services.Workshops.getWorkshops();
        const workshopMap = this.sortByDay(workshops);
        this.setState({data: workshopMap});
    }

    fetchFavorites = async () => {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        const favoriteIds = favorites.map(favorite => favorite.id);
        this.setState({
            favoriteIds: favoriteIds
        });
    }

    isFavorite = (item) => {
        return this.state.favoriteIds.includes(item.id);
    }

    add = async (item) => {
        let favoriteIds = this.state.favoriteIds;
        favoriteIds.push(item.id)
        this.setState({
            favoriteIds: favoriteIds
        })
    }

    delete = async (item) => {
        this.setState({
            favoriteIds: this.state.favoriteIds
                .filter((value, index, arr) => value != item.id)
        })
    }
}

export default ScheduleScreen;