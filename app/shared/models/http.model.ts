
export interface HttpParams {
  [key: string]: any;
}


export interface Pagination {
  limit?: number;
  page: number;
  total_pages?: number;
  total_records?: number;
  next?: string | null;
  previous?: string | null;
  fetchUrl?: string | null;
}
export interface EntityHttpParams {
  entity: string;
  urlParams?: HttpParams;
  pagination: Pagination;
}

export interface HttpParamsWithSearch {
  httpParams: HttpParams;
  extra?: HttpParams | 'NO_CHANGE';
}

export interface GetHookProps {
  url: string;
  params?: HttpParams;
}

export interface HttpEntityProp {
  entityType: string;
  params?: HttpParams;
  sleep?: number;
}

export interface ErrorResponse {
  status: number;
  statusText: string;
  data: any;
  error?: Error;
  internal: boolean;
}

export interface HttpResponsePaged<T> {
  data: T;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  currentResultSetCount: number;
}

