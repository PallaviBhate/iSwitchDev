import axios from 'axios';
import React, { Component } from 'react';

class UserService extends Component {

    getAllUser() {
        const userId = JSON.parse(localStorage.getItem('userDetails')).id;
        //const userID = localStorage.getItem('candidateId')
        // console.log(localStorage.getItem('userDetails'))
        return axios
            .get('https://techm-jobzilla.herokuapp.com/jobs/user/allUsersByRole/' + userId)
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