const API = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function get(path) {
	return fetch(API + path, {
		headers: {
			Authorization:
				`Bearer ${ACCESS_TOKEN}`,
			'Content-Type': 'application/json;charset=utf-8'
		}
	}).then((result) => result.json());
}
