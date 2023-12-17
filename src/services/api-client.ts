import axios from 'axios';

console.log(import.meta.env.VITE_API_KEY);

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: import.meta.env.VITE_API_KEY,
	},
});
