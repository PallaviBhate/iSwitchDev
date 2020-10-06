import axios from 'axios';

export default class CustomerService {

    // getCustomersSmall() {
    //     return axios.get('shdata/customers-small.json')
    //             .then(res => res.data.data);
    // }

    // getCustomersMedium() {
    //     return axios.get('showcase/demo/data/customers-medium.json')
    //             .then(res => res.data.data);
    // }

    getCustomersLarge() {
        return axios.get('LocalJson/customers-large1.json')
            .then(res => res.data.data);
    }

    getCustomersXLarge() {
        return axios.get('LocalJson/customers-xlarge.json')
            .then(res => res.data.data);
    }
}