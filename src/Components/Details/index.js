import React from 'react';
import { HabitDetails, Title, Description, UncheckedSquare, CheckedSquare } from './styles';

export const Details = (props) => {
    // This component retrieves the id from the props passed by the route
    const { id } = props.match.params;

    // Using the id, the component finds the right habit in the array
    return ( 
        <HabitDetails>
            <Title>{props.habits[id].name}</Title>
            <Description>{props.habits[id].description || "No description"}</Description>
            <div id="progress">
                {props.habits[id].progress.map((day, index) => day ? <CheckedSquare id={index} /> : <UncheckedSquare id={index} />)}
            </div>
        </HabitDetails>
    )
};