import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

let counter = 4;

const DescriptionBar = () => {

    const { description, updateDescription } = useContext(UserContext) //This comes from the UserContext

    let newDescription = '' //This is for storing the input value

    //This allows to use State in function components and provides the setWhatever methos to modify the state (descriptions)
    const [descriptions, setDescriptions] = useState([ 
        { id: 1, description: 'Description 1' },
        { id: 2,description: 'Description 2' },
        { id: 3,description: 'Description 3' }
    ])

    // useEffect watches the state, aka re-renders the component every time the state (descriptions) change
    useEffect(() => {
        console.log('useEffect run for songs...');
        
    }, [descriptions])

    //This method we created to update the state (descriptions). It receive a new description and add it to the state
    const addNewLine = (desc) => {
        counter++
        setDescriptions([
            ...descriptions,
            { id:counter, description: desc }
        ])
    }

    const handleChange = (e) => {
        newDescription = e.target.value
    }

    return (
        <div className="description">
            <p>{description}</p>

            <input onChange={handleChange}></input>

            <button onClick={() => updateDescription(newDescription)}>Change desc</button>
            
            <button onClick={() => { addNewLine(newDescription) }}>Add a new line</button>

            {descriptions.map(item => {
            
                return (<h2 key={item.id}>{item.description}</h2>)
            })}
        </div>
    );
}

export default DescriptionBar;