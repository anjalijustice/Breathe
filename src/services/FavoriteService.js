export default class FavoriteService {
    static async createFavorite(userId, workshopId) {
        try {
            const favorite = await fetch(`https://breathe-api.herokuapp.com/favorites?userId=${encodeURIComponent(userId)}&workshopId=${encodeURIComponent(workshopId)}`, {
                method: 'POST'
            });
            return favorite.json();
        }
        catch (error) {
            return console.log('this is an error' + error);
        }
    }
    static async getFavoritesByUser(userId) {
        const favorites = await fetch('https://breathe-api.herokuapp.com/favorites/' + userId);
        return favorites.json();
    }
    static async deleteFavorite(userId, workshopId) {
        try {
            return fetch(`https://breathe-api.herokuapp.com/favorites?userId=${encodeURIComponent(userId)}&workshopId=${encodeURIComponent(workshopId)}`, {
                method: 'DELETE'
            });
        }
        catch (error) {
            return console.log('this is an error' + error);
        }
    }
}