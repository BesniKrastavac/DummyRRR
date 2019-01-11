import {SET_SOME_ID,} from '../actions/ActionsTypes'
import {ActionType,} from '../types/SomeId' // eslint-disable-line no-unused-vars
import {StateType,} from '../types/State' // eslint-disable-line no-unused-vars

export function someId(state: StateType | null = null, action: ActionType): (StateType | string | null) {
	switch (action.type) {
	case SET_SOME_ID:
		return action.payload.someId
	default:
		return state
	}
}
