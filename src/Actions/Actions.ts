import { SET_SOME_ID, SET_DUMMY_TEXT, } from './ActionsTypes'
import { Dispatch, } from 'redux' // eslint-disable-line no-unused-vars
import fapi from '../services/FAPIService'
import { createSetSomeIdType, } from '../types/SomeId' // eslint-disable-line no-unused-vars
import { createSetDummyTextType, } from '../types/DummyText' // eslint-disable-line no-unused-vars

export function createSetSomeId(someId: string): createSetSomeIdType {
	return {
		type: SET_SOME_ID,
		payload: { someId, },
	}
}

export function createSetDummyText(dummyText: string): createSetDummyTextType {
	return {
		type: SET_DUMMY_TEXT,
		payload: { dummyText, },
	}
}

export function load(): Function {
	return (dispatch: Dispatch<createSetSomeIdType | createSetDummyTextType>) =>
		fapi.get('/todos/1')
			.then(response => response.data)
			.then(data => dispatch(createSetSomeId(data.id)) && dispatch(createSetDummyText(data.title)))
}
