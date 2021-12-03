export default interface Todo {
  _id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
  isUpdated: boolean;
}
