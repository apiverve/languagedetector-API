declare module '@apiverve/languagedetector' {
  export interface languagedetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface languagedetectorResponse {
    status: string;
    error: string | null;
    data: LanguageDetectorData;
    code?: number;
  }


  interface LanguageDetectorData {
      language:   string;
      confidence: number;
      code:       string;
  }

  export default class languagedetectorWrapper {
    constructor(options: languagedetectorOptions);

    execute(callback: (error: any, data: languagedetectorResponse | null) => void): Promise<languagedetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: languagedetectorResponse | null) => void): Promise<languagedetectorResponse>;
    execute(query?: Record<string, any>): Promise<languagedetectorResponse>;
  }
}
