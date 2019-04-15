import React from 'react';
import { HabitDetails, Title, Description, SecondaryTitle, UncheckedSquare, CheckedSquare } from './styles';

export const Details = (props) => {
    // This component retrieves the id from the props passed by the route
    const { id } = props.match.params;
    const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    // Using the id, the component finds the right habit in the array
    return ( 
        <HabitDetails>
            <Title>{props.habits[id].name}</Title>
            <Description>{props.habits[id].description || "No description"}</Description>
            <hr />
            <SecondaryTitle>Weekly Progress:</SecondaryTitle>
            <div id="progress">
                {props.habits[id].progress.map((day, index) => day ? <CheckedSquare id={index} name={id} onClick={props.handleClick}>{week[index]}</CheckedSquare> 
                : <UncheckedSquare id={index} name={id} onClick={props.handleClick}>{week[index]}</UncheckedSquare>)}
            </div>
        </HabitDetails>
    )
};