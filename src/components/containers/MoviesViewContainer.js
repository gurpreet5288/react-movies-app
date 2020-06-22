import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SelectOptions from "../common/SelectOptions";
import ListContainer from "../containers/ListContainer";
import { listMovies } from "../../services/api";

class MoviesViewContainer extends Component {  
        state = {
                moviesList:[],
                MovieCategory:null,
                responsePage : 0
        }
        Options = [{ name: "now playing", value: "now_playing" }, { name: "popular", value: "popular" },
                { name: "top rated", value: "top_rated" },  { name: "upcoming", value: "upcoming" }
        ];

        handlePageChange = (event, currentpage) => {
            listMovies(this.state.MovieCategory, currentpage).then(response => {
                if (response.status === 200) {
                    this.setState({
                        moviesList:response.data.results,
                        responsePage :response.data.total_pages
                    }) 
                }else {
                    console.log(response); 
                }
            });
        };

        handleOptionChange = categoryList => {  
            this.setState({
                MovieCategory:categoryList
            })
            listMovies(categoryList).then(response => {
                if (response.status === 200) {
                    this.setState({
                        moviesList:response.data.results,
                        responsePage :response.data.total_pages
                    }) 
                }else {
                    console.log(response); 
                }
            });
        };
        render() {
        return (
            <Container>
                <SelectOptions handleOptionChange={this.handleOptionChange}  SelectMenu="Category"  SelectMenuOptions={this.Options}  />
                <ListContainer handlePageChange={this.handlePageChange} pageList={this.state.responsePage}  response={this.state.moviesList} />
            </Container>
        );}
}

export default MoviesViewContainer;
