import React, { Component }  from "react";  
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import ListingLayout from "../layout/ListingLayout";
 
class ListContainer extends Component {   
    render() {
        let ItemListing = this.props.response.map( item => { return <ListingLayout key={item.id} item={item} />; });
        let PageResult;
        if (ItemListing.length > 10) {
            let ItemList = ItemListing;
            if(this.props.pageList > 1){
                ItemList.length = 15;
            }else{
                ItemList.length = 10;
            } 
            PageResult =  ItemList;
        }else{
            PageResult=  ItemListing;
        }   
        return (
            <div>
                <Container maxWidth="md">
                    {PageResult}
                </Container>
                {this.props.response.length > 10 && ( <Pagination onChange={this.props.handlePageChange}  style={pageList}  count={this.props.pageList}  color="primary" />  )}
            </div>
        );
    }
};
const pageList = {
    display: "flex",
    marginBottom: "20px",
    marginTop: "10px",
    justifyContent: "center" 
}  
export default ListContainer;
