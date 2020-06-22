import React, { Component }  from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel"; 
import FormControl from "@material-ui/core/FormControl";

class SelectOptions extends Component {   

    constructor(props) {
        super(props);
        this.SelectOptionsLabel = React.createRef(null);
        this.state = {
            labelSize : 8,
            OptionValue : ""
        }
    }
    SelecthandleChange = e => { this.setState({OptionValue:e.target.value});  
                                this.setState({ labelSize:this.SelectOptionsLabel.current.offsetWidth }) ;
                                this.props.handleOptionChange(e.target.value);  
                            }; 
    render() {
        return (
        <div>
            <FormControl variant="outlined" style={formClass}>
                <InputLabel ref={this.SelectOptionsLabel} id="select-menu"> {this.props.SelectMenu} </InputLabel>
                <Select value={this.state.OptionValue} onChange={this.SelecthandleChange} labelWidth={this.state.labelSize}>
                        {this.props.SelectMenuOptions.map((option, index) => (  <MenuItem key={index} value={option.value}>  {option.name} </MenuItem>))}
                </Select>
            </FormControl>
        </div>
        );
    }
};

const formClass = {
        width: 205, 
        marginTop: "32px",
        marginBottom: "32px",
} 
export default SelectOptions

