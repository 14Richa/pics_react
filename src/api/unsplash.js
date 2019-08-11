import axios from 'axios';


export default axios.create ({



	baseURL: 'https://api.unsplash.com/search/photos',
	headers: {
				Authorization: 'Client-ID 89e41729c5fcb0c9f82396729ba15cd55b444c3c7d7d032d0527e314247cf543'
			}
});