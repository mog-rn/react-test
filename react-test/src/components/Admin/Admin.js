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
    renderTableData() {
        return this.state.entries.map((Entry, index) => {
            const { entry } = Entry
            return (
                <tr>
                    <td>{entry}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <p>Admin Entries</p>
                    <table id="Admin">
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>

        )
    }
}

export default Admin;