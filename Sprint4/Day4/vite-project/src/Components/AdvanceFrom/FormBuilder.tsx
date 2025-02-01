import React, { useState } from 'react';
import { FieldConfig,FormBuilderProps,ValidationError } from './FieldsConfig';
import InputField from './InputFields';
import { Button, ButtonGroup } from '@chakra-ui/react'
  
  const FormBuilder: React.FC<FormBuilderProps> = ({ config, onSubmit }) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const [errors, setErrors] = useState<ValidationError>({});
  
    const validateField = (field: FieldConfig, value: any): string => {
      if (!field.validation) return '';
  
      const { required, min, max, pattern } = field.validation;
  
      if (required && !value) {
        return `${field.label} is required`;
      }
  
      if (value) {
        if (min !== undefined && Number(value) < min) {
          return `${field.label} must be at least ${min}`;
        }
  
        if (max !== undefined && Number(value) > max) {
          return `${field.label} must be at most ${max}`;
        }
  
        if (pattern && !new RegExp(pattern).test(value)) {
          return `${field.label} format is invalid`;
        }
      }
  
      return '';
    };
  
    const handleChange = (name: string, value: any) => {
      
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Validate field
      const field = config.find(f => f.name === name);
      if (field) {
        const error = validateField(field, value);
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      }
    };
  
    const validateForm = (): boolean => {
      const newErrors: ValidationError = {};
      let isValid = true;
  
      config.forEach(field => {
        
        if (field.conditional && formData[field.conditional.field] !== field.conditional.value) {
          return;
        }
  
        const error = validateField(field, formData[field.name]);
        if (error) {
          newErrors[field.name] = error;
          isValid = false;
        }
      });
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (validateForm() && onSubmit) {
        onSubmit(formData);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {config.map((field, index) => (
          <InputField
            key={index} 
            field={field} 
            value={formData[field.name]} 
            error={errors[field.name]}
            onChange={handleChange}
          />
        ))}
        
        <Button colorScheme='blue' type="submit">Submit</Button>
      </form>
    );
  };
  export default FormBuilder
  