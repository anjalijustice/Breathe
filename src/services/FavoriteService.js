import { API_URL } from './contants';

export default class FavoriteService {
    static async createFavorite(userId, workshopId) {
        try {
            const favorite = await fetch(`${API_URL}/favorites?userId=${encodeURIComponent(userId)}&workshopId=${encodeURIComponent(workshopId)}`, {
                method: 'POST'
            });
            return favorite.json();
        }
        catch (error) {
            return console.log('this is an error' + error);
        }
    }
    static async getFavoritesByUser(userId) {
        const favorites = await fetch(`${API_URL}/favorites/${userId}`);
        return favorites.json();
    }
    static async deleteFavorite(userId, workshopId) {
        try {
            return fetch(`${API_URL}/favorites?userId=${encodeURIComponent(userId)}&workshopId=${encodeURIComponent(workshopId)}`, {
                method: 'DELETE'
            });
        }
        catch (error) {
            return console.log('this is an error' + error);
        }
    }
    static async isFavorite(userId, workshopId) {
        try {
            const itemIsFavorite = await fetch(`${API_URL}/favorites?userId=${encodeURIComponent(userId)}&workshopId=${encodeURIComponent(workshopId)}`);
            return itemIsFavorite.json();
        }
        catch (error) {
            return console.log('this is an error' + error);
        }
    }
}