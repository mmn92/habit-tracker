import React from 'react';
import { NavLink } from 'react-router-dom';
import { HabitElement } from './styles';
import { Button } from '../Button';

export const Habit = (props) => (
    <HabitElement>
        <NavLink to={`/details/${props.id}`}><Button text={props.name} path="/" /></NavLink>
        <button name={props.id} onClick={props.handleDelete}> X </button>
    </HabitElement>
);