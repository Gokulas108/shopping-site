import React from 'react' ;
import AddProductForm from "./AddProductForm";
import AddCategoryForm from "./AddCategoryForm";


const Admin = () => (
    <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Add new Product :</h5>
                    <AddProductForm />
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Add new Category :</h5>
                    <AddCategoryForm />
                </div>
                </div>
            </div>
        </div>
    </div>
);

export default Admin ;