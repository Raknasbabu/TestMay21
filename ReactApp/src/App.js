import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AddEmployeeMgmt from './components/AddEmployeeMgmt'
import EditEmployeeMgmt from './components/EditEmployeeMgmt'
import Navbar from './components/shared/Navbar'
import Home from './components/Home'


const App = () => {
	// Data
	return (
		<BrowserRouter>
		  <div className="container">
			<div style={{marginTop: '80px'}}>
			 <Navbar></Navbar>
			  <Switch>
				  <Route path='/' component={Home} exact/>
				  <Route path='/add' component={AddEmployeeMgmt}/>
				  <Route path='/edit' component={EditEmployeeMgmt} />
			
			</Switch>
			</div>
			
		  </div>
		</BrowserRouter>
	  );
	}

export default App
