import React, { Component, createContext } from 'react';

export const UserContext = createContext()

class UserContextProvider extends Component {

    state = {
        name:'',
        description:''
    }

    updateDescription = (newDescription)=>{
        this.setState({description: newDescription})
    }

    render() {
        return (

            //We want this to wrap different components
            //Takes all properties and spread them out inside this value property:
            <UserContext.Provider value={{ ...this.state, updateDescription: this.updateDescription}}>

                {/* This refers to the children this component wraps! */}
                {this.props.children}

            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;