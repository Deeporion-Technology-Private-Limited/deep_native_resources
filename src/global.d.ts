import 'react-native';

// Override problematic RN types
declare module 'react-native' {
  interface FormData {
    append(name: string, value: any, fileName?: string): void;
  }

  interface Blob {
    readonly size: number;
    readonly type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
  }

  interface File extends Blob {
    readonly name: string;
    readonly lastModified: number;
  }
}