import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
    const { name} = useContext(UserContext)
    return ( 
        <div className="navbar">
            <h1>Menu</h1>
            <p>{name}</p>
        </div>
     );
}
 
export default Navbar;