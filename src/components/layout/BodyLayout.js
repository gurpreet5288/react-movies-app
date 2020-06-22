import React, { Component } from "react"; 
import {  Switch, Route, Link , BrowserRouter} from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab"; 
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { searchMovie } from "../../services/api";
import SearchContainer from "../containers/SearchContainer";
import MoviesViewContainer from "../containers/MoviesViewContainer";
import SearchViewContainer from "../containers/SearchViewContainer";
import TvViewContainer from "../containers/TvViewContainer";

class BodyLayout extends Component { 
      
      state = { 
            CurrentTabValue:0,
            searchResult:{ data: null, status: null },
            query:"",
            type:"multi",
            searchResultPage:0 
      } 

      handleSearchFormTextChange = event => {
          if (event.target.value.length >= 1) {
            this.setState({
              query:event.target.value,
              searchResult:{ data: [], status: "Init" },
            })
          }else{
            this.setState({ 
              searchResult:{ data: [], status: null},
            })
          }
      };

      handleSearchTypeChange = event => { 
            this.setState({ 
              type:event.target.value
            })
      }; 
       handleSearchFormSubmit = event => {
          event.preventDefault(); 
          if (this.state.query.trim().length > 0) {
                searchMovie(this.state.query, this.state.type).then(result => { 
                  if (result.status === 200) { 
                    result.data.results.length > 0 ?  this.setState({ searchResult: {data: result.data.results, status: "OK" }}) : this.setState({ searchResult: { data: [], status: "No result" }});
                    this.setState({ searchResultPage: result.data.total_pages })
                  }else {
                    console.log(result);
                  }
                });
          }else{
            this.setState({ searchResult: { data: [], status: "Invalid" }});
          }
      };
       handleSearchResultPageChange = (event, page) => {
          searchMovie(this.state.query, this.state.type, page).then(result => { 
                if(result.status === 200){ 
                  result.data.results.length > 0 ? this.setState({ searchResult: {data: result.data.results, status: "OK" }}) : this.setState({ searchResult: { data: [], status: "No result" }});
                  this.setState({ searchResultPage:result.data.total_pages});
                }else{
                      console.log(result);
                }
          });
      }; 
       handleTabChange = (event, newTabValue) => {
       this.setState({ CurrentTabValue: newTabValue});
          if (newTabValue === 1) {
            this.setState({ searchResult: {data: null, status: null }});
            this.setState({ query: ""});
          }
      };
      render() {
        
      return (
        <BrowserRouter>
                <SearchContainer SearchQuery={this.state.query} SearchType={this.state.type} handleType={this.handleSearchTypeChange} handleSubmit={this.handleSearchFormSubmit} handleChange={this.handleSearchFormTextChange} />
                <Container style={BodyContainer}>
                    <AppBar position="static" color="default">
                            <Tabs  value={this.state.CurrentTabValue}  onChange={this.handleTabChange}  indicatorColor="primary"  variant="fullWidth" >
                                <Tab label="Movies" component={Link} to="/movies" />
                                <Tab label="Search Results" component={Link} to="/search" />
                                <Tab label="TV Shows" component={Link} to="/tv" />
                          </Tabs>
                    </AppBar> 
                    <Switch>
                          <Route exact path={["/", "/movies"]}>   <MoviesViewContainer />  </Route>
                          <Route path="/search">
                                <SearchViewContainer handlePageChange={this.handleSearchResultPageChange} currentPage={this.state.searchResultPage} searchResponse={this.state.searchResult} />
                          </Route>
                          <Route path="/tv">  <TvViewContainer /> </Route>
                    </Switch>
                </Container> 
        </BrowserRouter>
      );
      }
      
}; 
const BodyContainer = {
    border: "2px solid #000000",
    padding: 0
} 
export default BodyLayout;
