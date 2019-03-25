import React, {Component} from 'react';
import Todo from './todo';
import Item from './item';

class App extends Component {

	state = {
		placeholder: 'New',
		todotext: '',
		todoLists: []
	}

	handleClick = () => {
		var todoLists = this.state.todoLists;
		todoLists.push(this.state.todotext);
		this.setState({
			todoLists,
			todotext: ''
		});
	}

	handleChange = (event) => {
		var value = event.target.value;
		this.setState({
			todotext: value
		});
	}

	handleDelete = (index) => {
		var todoLists = this.state.todoLists;
		todoLists.splice(index, 1);
		this.setState({ todoLists });
	}

	render() {
		return (
			<div className="wrapper">
				<Todo clickAddButton={this.handleClick} handleChange={this.handleChange} inputVal={this.state.todotext} placeHolderText={this.state.placeholder} />
				
				<ul>
					{this.state.todoLists.map((item,index) => (
						<Item item={item} key={index} onDelete={this.handleDelete} index={index} />
					))}
				</ul>
			</div>
		);
	};
}

export default App;
