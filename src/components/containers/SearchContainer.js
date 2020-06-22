import React, { Component } from "react"; 
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SearchContainer extends Component { 
        searchTypes = ["movie",
                        "multi", 
                        "tv"];
        render() {         
            return (
              <Container>
              <form onSubmit={this.props.handleSubmit} style={SearchForm} noValidate  autoComplete="off">
                      <TextField style={searchQuery}  id="search-query" label="Search" value={this.props.SearchQuery} onChange={this.props.handleChange} variant="outlined" />
                      <TextField style={searchList}  id="search-type" select label="Search Type"  value={this.props.SearchType} onChange={this.props.handleType} variant="outlined" >
                              {this.searchTypes.map(type=> (
                                  <MenuItem key={type} value={type}> {type} </MenuItem>
                              ))}
                      </TextField>
                      <Button type="submit" variant="contained" color="primary">Search</Button>
              </form>
              </Container>
            );
        }; 

} 
const SearchForm =  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px auto"
}
const searchList = {
    width: 185,
    margin: 10
}
const searchQuery = {
    width: 600,
    margin: 10
}  
export default SearchContainer;
