import React from 'react';
import { Container } from './styles';

import { Habit } from '../Habit';



// This component receives an array with all the Habits stored in the App state
export const HabitsContainer = (props) => (
    <Container>
        {props.habits.map((habit, index) => <Habit id={index} name={habit.name} handleDelete={props.handleDelete} />)}
    </Container>
);