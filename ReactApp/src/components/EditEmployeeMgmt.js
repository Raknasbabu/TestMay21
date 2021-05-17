import React, { useState, Fragment } from 'react'
import EditEmployee from './EditEmployee'
import ViewEmployee from './ViewEmployee'

const EmployeeMgmt = () => {
    // Data
    const usersData = [
        { id: 1, name: 'sonia', username: 'soniag' },
        { id: 2, name: 'monica', username: 'monicas' },
        { id: 3, name: 'ria', username: 'ria' },
    ]

    const initialFormState = { id: null, name: '', username: '' }

    // Setting state
    const [users, setUsers] = useState(usersData)
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    // CRUD operations

    const deleteUser = id => {
        setEditing(false)

        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit user</h2>
                            <EditEmployee
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </Fragment>
                    ) : (
                            <Fragment>
                                <h2>Select User to edit</h2>
                            </Fragment>
                        )}
                </div>
                <div className="flex-large">
                    <h2>Employee Details</h2>
                    <ViewEmployee users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default EmployeeMgmt
