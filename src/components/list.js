import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions"
import {Link} from "react-router-dom";

class List extends Component {

    componentDidMount(){
        this.props.getData()
    }

    render() {
       // console.log("list:", this.props.list);
        const listElements = this.props.list.map(item => {
            return (
                <li className="collection-item" key={item._id}>
                    <Link to={`/todo/${item._id}`}>{item.title}</Link>
                    </li>
            )
        });

        return (
            <div>
                <h1 className="center">To Do List now with Redux</h1>
                <div className="row right-align">
                    <Link className="btn deep-purple" to="/add-item">Add Item</Link>
                </div>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.list.all
    }
}

export default connect(mapStateToProps, {getData: getData})(List);