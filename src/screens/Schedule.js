import Services from '../services';
import WorkshopsView from './WorkshopsView';

class ScheduleScreen extends WorkshopsView {
    static navigationOptions = {
        title: 'SCHEDULE',
    };

    constructor(props) {
        super(props);
        this.state = {
            user: props.route.params.user ?? {},
            isLoading: true,
            dateSelected: '11',
            like: true,
            data: props.route.params.workshopMap ?? {},
            favoriteIds: [],
        }
    }

    fetchData = async () => {
        await this.fetchFavorites();
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