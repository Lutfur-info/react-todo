import React, {Component} from 'react';

class Todo extends Component {
	render() {
		return (
		    <React.Fragment>
				<div className="form-group">
					<input type="text" placeholder={this.props.placeHolderText} onChange={this.props.handleChange} value={this.props.inputVal} />
				</div>
				<div className="form-group">
					<button type="button" onClick={this.props.clickAddButton} disabled={this.props.inputVal === ''}>Add</button>
				</div>
			</React.Fragment>
		);
	};
}

export default Todo;