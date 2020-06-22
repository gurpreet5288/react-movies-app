import React, { Component }  from "react";
import Container from "@material-ui/core/Container";
import ListContainer from "../containers/ListContainer"; 
import SelectOptions from "../common/SelectOptions";
import { listTv } from "../../services/api";

class TvViewContainer extends Component { 
        
        state = {
            tvShowsList:[],
            TvCategory:null,
            responsePage : 0
        }
        Options = [{ name: "airing today", value: "airing_today" },  { name: "on the air", value: "on_the_air" },
                    { name: "popular", value: "popular" }, { name: "top rated", value: "top_rated" }];


        handlePageChange = (event, currentpage) => {
            listTv(this.state.TvCategory, currentpage).then(response => { 
                if (response.status === 200) {
                    this.setState({
                        tvShowsList:response.data.results,
                        responsePage :response.data.total_pages
                       })
                }else {
                    console.log(response);
                }
            });
        }; 

        handleOptionChange = categoryList => { 
            this.setState({
                TvCategory:categoryList
               })
            listTv(categoryList).then(response => { 
                if (response.status === 200) {
                    this.setState({
                        tvShowsList:response.data.results,
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
                    <SelectOptions  handleOptionChange={this.handleOptionChange} SelectMenu="Category" SelectMenuOptions={this.Options}  /> 
                    <ListContainer handlePageChange={this.handlePageChange} pageList={this.state.responsePage} response={this.state.tvShowsList}  /> 
                </Container>
            );
        }
};

export default TvViewContainer;
