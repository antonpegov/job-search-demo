export interface ApiResponse<T> {
  errno: number;
  error: string;
  body: T[];
}
