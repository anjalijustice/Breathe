export default class FavoriteService {
    static createFavorite(userId, workshopId) {
        return fetch(`http://127.0.0.1:8080/favorites?userId=${encodeURIComponent(userId)}&workshopId=${encodeURIComponent(workshopId)}`, {
            method: 'POST',
            // headers: {
            //   Accept: 'application/json',
            //   'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({
            //   favorite
            // }),
          })
          .then((favorite) => {return favorite.json()})
          .catch((error) => console.log('this is an error' + error));
    }
}