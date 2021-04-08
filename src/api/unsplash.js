import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID iXDCCof9oSKmrYyRLbvo0zJLodH3x4KEp3j_pIUk8j0'
    }
});