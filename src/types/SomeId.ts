export interface ActionType {
    type: string;
    payload: SomeIdPayloadType;
}

export interface SomeIdPayloadType {
    someId: string
}

export interface createSetSomeIdType {
    type: 'SET_SOME_ID',
    payload: SomeIdPayloadType
}
