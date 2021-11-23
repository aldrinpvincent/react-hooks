import { useRef } from 'react';

export function usePrevious<T>(initialValue: T, currentValue: T): T {
  const previousValueRef = useRef<T>(initialValue);
  const result = previousValueRef.current;
  previousValueRef.current = currentValue;
  return result;
}