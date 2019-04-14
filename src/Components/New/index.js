import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { NewForm, Button, Title } from './styles';

export const New = (props) => (
    <Fragment>
        <Title>Create a new Habit</Title>
        <NewForm>
            <label>
                Name:
                <input name="formName" type="text" value={props.name} onChange={props.handleInputChange} />
            </label>
            <label>
                Description:
                <input name="formDesc" type="text" value={props.description} onChange={props.handleInputChange} />
            </label>
            <div id="form-buttons">
                <NavLink to="/"><Button name="cancel" type="button" onClick={props.handleSubmit}>Cancel</Button></NavLink>
                <NavLink to="/"><Button name="create" type="button" onClick={props.handleSubmit}>Create</Button></NavLink>
            </div>
        </NewForm>
    </Fragment>
);