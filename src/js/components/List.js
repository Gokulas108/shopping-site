import React from 'react' ;
import { connect } from 'react-redux' ;

const mapStateToProps = state => {
    if(state.selectedCategory == "")
        return { products : state.products } ;
    else
        return {products : state.products.filter(el => el.category == state.selectedCategory)} ;    
};

const connectedList = ({ products }) => (
    <center>
        <div class="card-columns">
            {products.map(product => (
                <div key = {product.id} className="card border-dark mb-3" style={{width: '18rem'}}>
                    <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.brandName}</h6>
                    <p className="card-text">Category : {product.category}</p>
                    <h4>Rs {product.price} /-</h4>
                    <button className="btn btn-dark">Buy</button>
                    </div>
                </div> 
            ))}
        </div>  
    </center>
);

const List = connect(mapStateToProps)(connectedList) ;

export default List ;

