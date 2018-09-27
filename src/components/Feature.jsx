import React, { Component } from 'react';
import requireAuth from './requireAuth'

class Feature extends Component {

    render() {
   
    const retrievedData = JSON.parse(localStorage.getItem('user'));

        return (
            <div>
                This is the feature component
                Welcome {retrievedData.firstName + ' ' + retrievedData.lastName} 
            </div>
        );
    }
}

export default requireAuth(Feature);