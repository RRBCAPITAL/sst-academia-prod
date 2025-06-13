export interface HttpClientPort {
    post<T = any>(url: string, data?: any, config?: any): Promise<T>;
    get<T = any>(url: string, config?: any): Promise<T>;
    // Puedes extender más métodos según lo necesites (put, delete, etc.)
  }
  