import React, { Component } from 'react' ;
import { addCategory } from "../actions/index" ;
import { connect } from "react-redux" ;


function mapDispatchToProps(dispatch){
    return { addCategory: category => dispatch(addCategory(category))};
}; 

class connectedCategoryForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: ""
        } ;   
    }

    handleChange = (event) => {
        this.setState({ [event.target.id] : event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault() ;
        const category  = this.state.category ;
        console.log(category);
        this.props.addCategory(category) ;
        this.setState({
            category: "",
        });
    };

    render(){
        const category = this.state.category ;

        return(
            <form onSubmit = { this.handleSubmit }>
                <br />
                <div className="form-row">
                    <div className="col">
                        <label>Category</label>
                        <input 
                            type = "text"
                            id = "category"
                            value = {category}
                            onChange = {this.handleChange}
                            className="form-control"
                            placeholder="Category"
                            required
                        />
                        <br />
                        <button type="submit" className="btn btn-primary">Add Category</button>
                    </div>
                        
                </div>
                <br />
            </form>
        );
    }
}

const AddCategoryForm = connect(null,mapDispatchToProps)(connectedCategoryForm) ;

export default AddCategoryForm ;

