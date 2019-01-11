import React, { Component, } from 'react' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button'

class AnotherComponent extends Component {

	render() {
		const dummyText = this.props.dummyText
		return (
			<Button variant="contained" color="primary">
				{dummyText}
			</Button>
		)
	}
}

const mapStateToProps = state => {
	return {
		dummyText: state.dummyText,
	}
}

const mapDispatchToProps = () => {
	return {}
}

const AnotherComponentConnector = connect => connect(mapStateToProps, mapDispatchToProps)(AnotherComponent)

export default AnotherComponentConnector
export const anotherComponentRoutePath = '/app/another'
