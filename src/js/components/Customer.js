import React from 'react' ;
import List from './List' ;
import SelectCategory from './SelectCategory' ;

const Customer = () => (
    <div>
        <br />
        <label>Select Category : </label>
        <SelectCategory />
        <br />
        <List />
    </div>
);

export default Customer ;