import React from 'react';
import { MainContent } from './styles';

class Main extends React.Component{
    render() {
        return (
            <MainContent>
                {React.cloneElement(this.props.children, this.props)}
            </MainContent>
        )
    }
};

export default Main;