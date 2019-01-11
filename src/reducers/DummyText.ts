import {SET_DUMMY_TEXT,} from '../actions/ActionsTypes'
import {ActionType,} from '../types/DummyText' // eslint-disable-line no-unused-vars
import {NullableStateType, StateType,} from '../types/State' // eslint-disable-line no-unused-vars

export function dummyText(state: NullableStateType = null, action: ActionType): (StateType | string | null) {
	switch (action.type) {
	case SET_DUMMY_TEXT:
		return action.payload.dummyText
	default:
		return state
	}
}
