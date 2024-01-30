import type { Account } from "./account.model";
import type { DateDisplayFormat } from "./general.model";

export interface AddEditResponse {
  ok?: boolean;
  message?: string;
  error?: boolean;
}

export interface Category {
  id: string;
  name: string;
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  dateAddedFromNow?: DateDisplayFormat;
  updatedAtFromNow?: DateDisplayFormat;
  disabled: boolean;
  shown: boolean;
  accounts: Account[];
  comments: CategoryComment[];
}

export interface CategoryComment {
  id: string;
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  comment: string;
  categoryId: string;
  category?: Category | null;
}

export interface CategoryAddable extends AddEditResponse {
  name: string;
  shown?: boolean | null;
}

export interface CategoryEditable extends AddEditResponse {
  id: string;
  name: string;
  disabled?: boolean | null;
  shown?: boolean | null;
}

export interface CategoryDialogData {
  shown: boolean;
  editMode: boolean;
  initData?: CategoryAddable | CategoryEditable;
}