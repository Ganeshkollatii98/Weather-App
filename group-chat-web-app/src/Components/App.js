import React from 'react';
import { useEffect } from 'react';
import {connect} from "react-redux";
import faker from 'faker';
import { func } from 'prop-types';
function App () {
  useEffect(()=>{
    const suggestions=[...Array(20)].map((_,i)=>({
      ...faker.helpers.contextualCard(),
      id:i
    }))
    console.log(suggestions)
  },[]);

 
    return (
      <div>
         App
      </div>
    );
  
}
// function mapStateToProps(state){
//     return {
//       posts:state.props
//     }
// }

export default App;
