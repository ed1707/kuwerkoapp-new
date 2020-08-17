
import React, { Component } from 'react';
import axios from 'axios';

const Begriff = props => (
  <tr>
    <td>{props.begriff.oberbegriff}</td>
    <td>{props.begriff.alternative_benennung}</td>
  </tr>
)

export default class BegriffeList extends Component {
  constructor(props) {
   super(props);

   this.state = {begriffe: []};
 }

 componentDidMount() {
   axios.get('http://localhost:5000/begriffe/')
     .then(response => {
       this.setState({ begriffe: response.data })
     })

     .catch((error) => { console.log(error)})
   }

 begriffList() {
   return this.state.begriffe.map(currentbegriff => {
     return <Begriff begriff={currentbegriff} key={currentbegriff._id}/>;
   })
 }

  render() {
   return (
     <div>
       <h3>Vorhandene Oberbegriffe</h3>
       <table className="table">
         <thead className="thead-light">
           <tr>
             <th>Oberbegriff</th>
             <th>Alternative Benennung</th>
           </tr>
         </thead>
         <tbody>
           { this.begriffList() }
         </tbody>
       </table>
     </div>
    )
  }
}
