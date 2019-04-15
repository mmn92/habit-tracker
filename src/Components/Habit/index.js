import React from 'react';
import { NavLink } from 'react-router-dom';
import { HabitElement } from './styles';

export const Habit = (props) => (
    <HabitElement>
        <NavLink to={`/details/${props.id}`}><button>{props.name}</button></NavLink>
        <button name={props.id} onClick={props.handleDelete}> X </button>
    </HabitElement>
);