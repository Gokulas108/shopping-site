import React, { Component } from 'react' ;
import { addProduct } from "../actions/index" ;
import { connect } from "react-redux" ;
import SelectCategory from './SelectCategory';

function mapDispatchToProps(dispatch){
    return { addProduct: product => dispatch(addProduct(product))};
} 

class connectedForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            brandName: "" ,
            category: "",
            price: ""
        } ;   
    }

    handleChange = (event) => {
        this.setState({ [event.target.id] : event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault() ;
        const newProduct  = this.state ;
        this.props.addProduct(newProduct) ;
        this.setState({
            name: "",
            brandName: "" ,
            category: "",
            price: ""
        });
    };

    handleSelection = (selected) => {
        this.setState({
            category: selected
        }); 
    }

    render(){
        const newProduct = this.state ;

        return(
            <form onSubmit = { this.handleSubmit }>
                <br />
                <div className="form-row">
                    <div className="col">
                        <label>Product Name</label>
                        <input 
                            type = "text"
                            id = "name"
                            value = {newProduct.name}
                            onChange = {this.handleChange}
                            className="form-control"
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div className="col">
                        <label>Brand Name</label>
                        <input 
                            type = "text"
                            id = "brandName"
                            value = {newProduct.brandName}
                            onChange = {this.handleChange}
                            className="form-control"
                            placeholder="Brand"
                            required
                        />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="col">
                        <label>Category</label>
                        <SelectCategory onSelection = {this.handleSelection} toAdd={true}/>
                    </div>
                    <div className="col">
                        <label>Price</label>
                        <input 
                            type = "number"
                            id = "price"
                            value = {newProduct.price}
                            onChange = {this.handleChange}
                            className="form-control"
                            placeholder="Price"
                            required
                        />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        );
    }
}

const AddProductForm = connect(null,mapDispatchToProps)(connectedForm) ;

export default AddProductForm ;

