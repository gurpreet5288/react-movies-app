import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class HeaderLayout extends Component { 
    
    render() {
        return (
            <Container style={Header}>
                <Typography style={TagLine} component="h1" variant="h4">React Movies App</Typography>
            </Container>
        )
    }
}
const TagLine = {
        border:"4px solid #000000",
        margin:"50px auto",
        padding:"15px",
        fontSize:"3rem"
};
const Header = {
        padding:0,
        margin:"auto", 
} 
export default HeaderLayout

