import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'semantic-ui-react';

const HomePage = () => (
<div className="ui container">
  <h1>Toy Store</h1>
  <Link to='/login' className="button"> Login </Link><br/>
  <Link to='/registration' className ="button"> Registration</Link>
</div>

);

export default HomePage;
