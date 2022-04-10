import React, { Component } from 'react';
import ColorToggleButton from './ToggleButton';
class Users extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() { 
        return (
            <>
                <h2>Invoice</h2>
                <ColorToggleButton />
                <Users />
            </>
        );
    }
}
 
export default Users;
