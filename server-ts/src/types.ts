export interface Meeting {
  id: number;
  title: string;
  date: string;
}

export type ApiResponse<T> = {
  success: boolean;
  data: T;
};