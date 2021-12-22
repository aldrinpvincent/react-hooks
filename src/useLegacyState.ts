//  This hook will mimic the state merging functinality of `this.setState` which is available in class components,doesn’t support callback functions in either the init or reducer

export function useLegacyState<T>(
    initialState: T
): [T, (value: Record<string, any>) => void] {
    return useReducer(
        (state: T, update: Record<string, any>) => ({
            ...state,
            ...update
        }),
        initialState
    );
}
