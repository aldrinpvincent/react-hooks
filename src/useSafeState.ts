import { useIsMounted } from "./useIsMounted"

 export function useSafeState<T>(initialState: T): [T, (value: T) => void] {
    const isMounted = useIsMounted();
    const [state, setState] = React.useState(initialState);
  
    const safeSetState = React.useCallback(
      (value: T) => {
          if (isMounted()) {
            setState(value)
          }
      },
      [isMounted]
    );
  
    return [state, safeSetState];
  }