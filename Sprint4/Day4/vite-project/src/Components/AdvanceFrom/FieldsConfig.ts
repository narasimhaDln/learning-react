export interface ValidationError {
    [key: string]: string;
  }
  
  export interface FieldConfig {
    type: string;
    label: string;
    name: string;
    validation?: {
      required?: boolean;
      min?: number;
      max?: number;
      pattern?: string;
    };
    conditional?: {
      field: string;
      value: any;
    };
    options?: string[];
    dependentOn?: string;
  }
  
  export interface FormBuilderProps {
    config: FieldConfig[];
    onSubmit?: (data: any) => void;
  }
  

