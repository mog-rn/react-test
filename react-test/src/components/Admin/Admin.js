import React, { Component } from 'react'


const data  = [
        {entry: 'AdminEntry1'},
        {entry: 'AdminEntry2'},
        {entry: 'AdminEntry3'},
        {entry: 'AdminEntry4'},
        {entry: 'AdminEntry5'}
    ];
const columns = [{
    dataField: 'entry',
    text: 'Entry'
}]

class Admin extends Component {
    render() {
        return (
            <div>
                <p>Admin Entries</p>
                
            </div>

        )
    }
}

export default Admin;