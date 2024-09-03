import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b658a5d7eb164f23bc2e3a882bb3bcec'
    },
})