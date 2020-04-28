import React, { Component } from 'react' ;
import { selectCategory } from "../actions/index" ;
import { connect } from "react-redux" ;

const mapStateToProps = state => {
        return { categories: state.categories, selectedCategory: state.selectedCategory} ;
};        

function mapDispatchToProps(dispatch){
    return { selectCategory: (category) => dispatch(selectCategory(category))};
};

class ConnectedCategory extends Component {
    constructor(props){
        super(props);   
    }

    handleChange = (event) => {
        const category  = event.target.value ;
        if(this.props.toAdd){
            this.props.onSelection(category) ;
        }
        else{
        this.props.selectCategory(category); 
        }  
    };


    render(){
        const categories = this.props.categories ;
        return(
            <select className="form-control form-control-sm" id = "category" onChange = {this.handleChange} style={{width:'20rem'}}> 
                {this.props.toAdd
                    ? <option value="" Selected required>Select a category</option> :  <option value="">All</option>      
                }
                {categories.map(category => {return category == this.props.selectedCategory ? <option value={category} selected>{category}</option> : <option value={category} >{category}</option>})}
            </select>
        );
    }
}

const SelectCategory = connect(mapStateToProps,mapDispatchToProps)(ConnectedCategory) ;

export default SelectCategory ;