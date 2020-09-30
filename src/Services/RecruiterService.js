import axios from 'axios';

class RecruiterService {



    getCustomersLarge() {
        return axios.get('LocalJson/customers-large.json')
            // .then(res =>{console.log(res.data.data)});

    }
    getCustomersXLarge() {
        return axios.get('LocalJson/customers-small.json')
            // .then(res =>{console.log(res.data.data)});

    }

}
export default RecruiterService