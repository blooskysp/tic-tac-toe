import { connect } from 'react-redux';
import { Component } from 'react';

class FieldContainer extends Component {
	constructor(props) {
		super(props);
	}

	putMove(i) {
		const { draw, gameEnd, dispatch } = this.props;

		if (draw || gameEnd) return;

		dispatch({ type: 'SET_FIELD', payload: i });
	}

	render() {
		return (
			<div className="w-[300px] flex flex-wrap">
				{this.props.fields.map((item, i) => (
					<button
						key={i}
						onClick={() => this.putMove(i)}
						className="w-[100px] h-[100px] text-[60px] text-center items-center
						bg-transparent border-1 border-solid border-black transition-all
						duration-200 ease hover:bg-[#e7e7e7] cursor-pointer"
					>
						{item}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	fields: state.fields,
	draw: state.draw,
	gameEnd: state.gameEnd,
});

export const Field = connect(mapStateToProps)(FieldContainer);
