import axios from 'axios';
import React, { Component } from 'react';

class UserService extends Component {

    getAllUser() {
        const orgID = localStorage.getItem('orgnaizationId')
        return axios
            .get('https://techm-jobzilla.herokuapp.com/jobs/user/allUsersByRole/' + orgID)
            .then(res => res.data.responseObject);

    }

    // getProducts() {
    // 	return axios.get('./jsondata/products.json').then(res => res.data.data);
    // }

    // getProductsWithOrdersSmall() {
    // 	return axios.get('src/Showcase/demo/data/products-orders-small.json').then(res => res.data.data);
    // }
}
export default UserService