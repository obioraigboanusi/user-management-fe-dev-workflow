export interface BaseHookReturn<T> {
  data?: T[];
  isLoading: boolean;
  error: string | null;
}
