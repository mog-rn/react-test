import React, { Component } from 'react'


const data  = [
        
    ];
const columns = [{
    dataField: 'entry',
    text: 'Entry'
}]

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    entry: 'AdminEntry1'
                }, 
                {
                    entry: 'AdminEntry2'
                }, 
                {
                    entry: 'AdminEntry3'
                }, 
                {
                    entry: 'AdminEntry4'
                }, 
                {
                    entry: 'AdminEntry5'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <p>Admin Entries</p>

                </div>

        )
    }
}

export default Admin;