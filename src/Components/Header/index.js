import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderElement, Title } from './styles';

export const Header = () => (
    <HeaderElement>
        <Title>Habit Tracker</Title>
        <div>
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to="/new"><button>New</button></NavLink>
        </div>        
    </HeaderElement>
);