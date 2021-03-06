import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Job</td>
                <td></td>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.userData.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td>
                    <button onClick={() => {props.removeUser(index)}}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { userData, removeUser } = this.props;

        return (
            <table className="margin-top" >
                <TableHeader />
                <TableBody userData={userData} removeUser={removeUser} />
            </table>
        )
    }
}

export default Table;