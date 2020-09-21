import axios from 'axios';
import React, { Component } from 'react';

class UserService extends Component {

    getAllUser() {
        const userId = JSON.parse(localStorage.getItem('userDetails')).id;

        return axios
            .get('https://techm-jobzilla.herokuapp.com/jobs/user/allUsersByRole/' + userId)
            .then(res => res.data.responseObject);

    }
}
export default UserService