import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({
    label, placeholder, type, ...props
}) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor={field.name}>{label}</label>
            <input {...field} {...props} autoComplete="off" placeholder={placeholder} type={type} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${meta.touched && meta.error && 'border border-red-500'}`} />
            <ErrorMessage component="div" className="text-xs text-red-500 italic" name={field.name} />
        </div>
    );
};

export default TextField;
