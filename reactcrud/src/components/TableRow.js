// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:8090/api/employees/'+ this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.firstName}
          </td>
          <td>
            {this.props.obj.lastName}
          </td>
          <td>
            {new Date(this.props.obj.birthdate).toISOString().split('T')[0]}
          </td>
          <td>
            {this.props.obj.salary}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Editar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Borrar</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
