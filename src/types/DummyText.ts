export interface ActionType {
    type: string;
    payload: PayloadType;
}

interface PayloadType {
    dummyText: string
}

export interface createSetDummyTextType {
    type: 'SET_DUMMY_TEXT',
    payload: PayloadType
}
