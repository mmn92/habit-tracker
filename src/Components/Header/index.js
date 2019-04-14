import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderElement, Title } from './styles';
import { Button } from '../Button';

export const Header = () => (
    <HeaderElement>
        <Title>Habit Tracker</Title>
        <div>
            <NavLink to="/"><Button text="Home" path="/" /></NavLink>
            <NavLink to="/new"><Button text="New" path="/new" /></NavLink>
        </div>        
    </HeaderElement>
);