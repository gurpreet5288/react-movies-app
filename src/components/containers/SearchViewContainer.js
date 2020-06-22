import React, { Component }  from "react"; 
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ListContainer from "../containers/ListContainer";

class SearchViewContainer extends Component {      
    SearchViewResponse = () => {
        if (this.props.searchResponse.status === "OK"){
            return ( <ListContainer  response={this.props.searchResponse.data}  pageList={this.props.currentPage}  handlePageChange={this.props.handlePageChange}  /> );

        } else if (this.props.searchResponse.status === "No result") {
            return (  <Typography component="h2" style={searchContainerHeadingText} variant="h4">Sorry, there were no results</Typography>  );

        }else if (this.props.searchResponse.status === "Init") {
            return (   <Typography component="h2" style={searchContainerHeadingText} variant="h4">Please initiate a search</Typography>  );

        }
        return ( <Typography component="h2" style={searchContainerHeadingText} variant="h4">Please enter a search</Typography>  );
    }; 
    render() { 
        return (  <Container style={searchContainer}>{this.SearchViewResponse()}</Container> );
    }
};

const searchContainer = {  
    textAlign:'center',
    paddingBottom: "50px",
    paddingTop: "50px"
}  
const searchContainerHeadingText = { 
    fontSize:35
}
export default SearchViewContainer;
