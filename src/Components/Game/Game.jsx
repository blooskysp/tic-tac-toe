import { Information } from './Information/Information.jsx';
import { Field } from './Field/Field.jsx';
import { connect } from 'react-redux';
import { restartGame } from '../../actions/index.js';
import { Component } from 'react';

class GameContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resetGame: props.resetGame,
		};
	}

	render() {
		return (
			<div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center">
				<Information />
				<Field />
				<button
					onClick={this.state.resetGame}
					className="cursor-pointer mt-[30px] py-[10px] px-[30px] text-[24px]
					bg-transparent border-[1px] border-solid border-black rounded-[10px]
					transition-all duration-200 ease hover:bg-black hover:text-white
					hover:border-white hover:shadow-[#00000047] hover:shadow-[0px 4px 30px]
					hover:text-[30px]"
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	resetGame: () => dispatch(restartGame),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
