import React, {Component} from 'react';
import './todoitem.css';

class Item extends Component {
	render() {
		return (
		    <li>
		    	<span>{this.props.item}</span>
		    	<span onClick={() => {this.props.onDelete(this.props.index)}} className="crossicon"></span>
		    </li>
		);
	}
}

export default Item;