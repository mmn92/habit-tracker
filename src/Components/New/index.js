import React from 'react';
import { NavLink } from 'react-router-dom';
import { NewForm, Button, Title, Container } from './styles';

export const New = (props) => (
    <Container>
        <Title>Create a new Habit</Title>
        <NewForm>
            <label>
                Name:
                <br />
                <input name="formName" type="text" value={props.name} onChange={props.handleInputChange} />
            </label>
            <label>
                Description:
                <br />
                <textarea name="formDesc" type="text" value={props.description} onChange={props.handleInputChange} />
            </label>
            <div id="form-buttons">
                <NavLink to="/"><Button name="cancel" type="button" onClick={props.handleSubmit}>Cancel</Button></NavLink>
                <NavLink to="/"><Button name="create" type="button" onClick={props.handleSubmit}>Create</Button></NavLink>
            </div>
        </NewForm>
    </Container>
);