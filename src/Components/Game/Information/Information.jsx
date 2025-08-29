import { connect } from 'react-redux';
import { Component } from 'react';

class InformationContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h1 className="text-center text-[32px] font-medium mb-2">
				{this.props.draw
					? 'Ничья'
					: this.props.gameEnd
						? `Победил: ${this.props.currentPlayer}`
						: `Ход: ${this.props.currentPlayer}`}
			</h1>
		);
	}
}

const mapStateToProps = (state) => ({
	draw: state.draw,
	gameEnd: state.gameEnd,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
