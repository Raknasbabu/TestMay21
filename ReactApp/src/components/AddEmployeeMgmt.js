import React, { useState, Fragment } from 'react'
import AddEmployee from './AddEmployee'
import ViewAddedEmployee from './ViewAddedEmployee'

const AddEmployeeMgmt = () => {
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


	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}




	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					<Fragment>
						<h2>Add Employee</h2>
						<AddEmployee addUser={addUser} />
					</Fragment>

				</div>
				<div className="flex-large">
					<h2>Employee List</h2>
					<ViewAddedEmployee users={users} />
				</div>
			</div>
		</div>
	)
}

export default AddEmployeeMgmt
