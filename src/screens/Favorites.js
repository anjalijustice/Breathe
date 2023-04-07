import { getDayFromDateTime } from 'breathe/src/utils/dateTime'
import Services from 'breathe/src/services';
import WorkshopsView from './WorkshopsView';
import { sortByDay } from 'breathe/src/utils/dateTime';

//When you click on the workshop the button at the bottom says "add to favorites" even though its already in the favorites page
    //need to make that dynamic so that it says "remove from favorites" if its already in favorites

export default class FavoritesScreen extends WorkshopsView {
    static navigationOptions = {
        title: 'FAVORITES',
    };

    constructor(props) {
        super(props);
        this.state = {
            user: props.route.params.user ?? {},
            data: {},
            isLoading: true,
            dateSelected: '11',
        }
    }

    async fetchData() {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        const favoritesMap = sortByDay(favorites);
        this.setState({ data: favoritesMap });
    }

    isFavorite(item) {
        let data = this.state.data[getDayFromDateTime(item.startTime)] || [];
        return data.map(favorite => favorite.id).includes(item.id);
    }

    async add(item) {
        let favorites = this.state.data[getDayFromDateTime(item.startTime)] || [];
        favorites.push(item);

        let newData = this.state.data;
        newData[getDayFromDateTime(item.startTime)] = favorites;

        this.setState({
            data: newData
        })
    }

    async delete(item) {
        let favorites = (this.state.data[getDayFromDateTime(item.startTime)] || [])
            .filter((value, index, arr) => value.id != item.id);

        let newData = this.state.data;
        newData[getDayFromDateTime(item.startTime)] = favorites;
        
        this.setState({
            data: newData
        });
    }
}
