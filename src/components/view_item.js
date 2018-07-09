import React, {Component} from "react";
import {connect} from "react-redux";
import {getSingleItem} from "../actions";

class ViewItem extends Component {

    constructor(props) {
        super(props);

        this.state={
            loading: true,
            error: ""
        }
    }

    async componentDidMount() {
        const{item_id} =this.props.match.params;

        //console.log("item id: ", item_id);
       try {
           const resp= await this.props.getSingleItem(item_id);
           console.log("it worked");

           this.setState({
               loading: false,
               error: ""
           });
       } catch(err) {
           console.log("it failed");

           this.setState({
               loading: false,
               error: "unable to load to do item"
           })
       }
    }



    render() {
        const {item}=this.props;
        console.log("item: ", item);

        const{loading, error} = this.state;

        if(!item && loading) {
            return <h1>Loading...</h1>
        }

        if(!loading && error) {
            return <h1>{error}</h1>
        }
        return(
            <div>
                <h1>{item.title}</h1>
                <p><b>DETAILS: </b>{item.details}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getSingleItem: getSingleItem})(ViewItem);