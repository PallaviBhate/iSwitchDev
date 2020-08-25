import axios from 'axios';
import React, { Component } from 'react';

 class ProductService extends Component{

    // getProductsSmall() {
	// 	return axios.get('./jsondata/products-small.json').then(res => res.data.data);
	// }

	getProducts() {
		return axios.get('./jsondata/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
		return axios.get('src/Showcase/demo/data/products-orders-small.json').then(res => res.data.data);
	}
}
export default ProductService