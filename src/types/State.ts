export interface StateType {
    someId?: string | null,
    dummyText?: string | null,
    router: RouterType
}

export type NullableStateType = StateType | null;

interface RouterType {
    location: LocationType,
    action: string
}

interface LocationType {
    pathname: string,
    search: string,
    hash: string,
    key: string
}
