export interface ITodoItem {
  id: number;
  text: string;
  dueDate?: Date;
  completedDate?: Date;
  isCompleted: boolean;
  isDeleted: boolean;
}

export enum Actions {
  ADD_TODO = "ADD_TODO",
  ADD_TO_COMPLETED = "COMPLETED",
  ADD_TO_TRASH = "TRASH",
  ADD_BACK_TO_PENDING = "REVERSE",
  UNDO_DELETE = "UNDO_DELETE",
}
