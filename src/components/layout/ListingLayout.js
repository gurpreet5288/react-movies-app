import React, { Component }  from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography"; 

class ListingLayout extends Component {  

    render() {
      return (
        <Card style={CardContainer}>
          <CardContent style={cardSectionLeft}>
                  {this.props.item.poster_path && (<CardMedia image={`https://image.tmdb.org/t/p/w400${this.props.item.poster_path}`}
                                                  title={this.props.item.title ? this.props.item.title : this.props.item.name}
                                                  alt={this.props.item.title}  component="img"  /> )}
          </CardContent>
          <CardContent style={cardSectionRight}>
                <Typography variant="h5" component="h2"> {this.props.item.title ? this.props.item.title : this.props.item.name} </Typography>
                <Typography  gutterBottom variant="body2" style={Release} color="textSecondary"  component="p" >
                          Release Date: {this.props.item.release_date ? this.props.item.release_date: ""} | Popularity: {this.props.item.popularity}
                </Typography>
                <Typography align="left" style={listDescription} variant="body2" color="textSecondary" component="p">
                          {this.props.item.overview}
                </Typography>
          </CardContent>
        </Card>
      )
    }
}; 
const CardContainer =  {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem"
};
const cardSectionLeft = {
    width: "30%",
    padding: 0
}
const cardSectionRight= {
    width: "70%"
} 
const Release = {
    fontSize:18
}
const listDescription = {
    marginTop: "1rem"
}
export default ListingLayout



