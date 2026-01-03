import React from 'react'
import { useState, useEffect } from 'react';

const QuantityInput = ({ initialValue = 0, maxLimit = 100, setValue, value, isDisabled}) => {
    
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        
        // Handle empty input
        if (inputValue === '') {
            setValue('');
            setError('');
            return;
        }

        // Parse the input value
        const numValue = parseFloat(inputValue);
    
        // Check if it's a valid number
        if (isNaN(numValue)) {
            setError('Please enter a valid number');
            return;
        }

        // Check if it's negative
        if (numValue < 0) {
            setError('Please enter a positive number or 0');
            return;
        }

    // Check if it exceeds the max limit
        if (numValue > maxLimit) {
            setError(`Value cannot exceed ${maxLimit}`);
            return;
        }

        // Check for decimal places (optional, if you want only integers)
        // if (!Number.isInteger(numValue)) {
        //   setError('Please enter a whole number');
        //   return;
        // }

        // If all checks pass
        setValue(inputValue);
        setError('');
    };

    const handleBlur = (e) => {
        const inputValue = e.target.value;
    
        // Set to 0 if empty on blur
        if (inputValue === '') {
            setValue(0);
            setError('');
            return;
        }

        const numValue = parseFloat(inputValue);
    
        // Handle negative numbers by setting to 0
        if (numValue < 0) {
            setValue(0);
            setError('Negative values are not allowed. Set to 0.');
            setTimeout(() => setError(''), 3000); // Clear error after 3 seconds
        }
    
        // Handle values above max limit by setting to max limit
        if (numValue > maxLimit) {
            setValue(maxLimit);
            setError(`Value set to maximum allowed: ${maxLimit}`);
            setTimeout(() => setError(''), 3000); // Clear error after 3 seconds
        }
    };

    const handleKeyDown = (e) => {
        // Prevent negative sign and 'e' for scientific notation
        if (e.key === '-' || e.key === 'e' || e.key === 'E') {
            e.preventDefault();
        }
    
        // Arrow up/down functionality
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const current = parseFloat(value) || 0;
            const newValue = current + 1;
            if (newValue >= 0 && newValue <= maxLimit) {
                setValue(newValue);
            } 
            else if (newValue > maxLimit) {
                setValue(maxLimit);
            }
        }
    
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const current = parseFloat(value) || 0;
            const newValue = current - 1;
            if (newValue >= 0) {
                setValue(newValue);
            } 
            else {
                setValue(0);
            }
        }
    };

    const increment = () => {
        const current = parseFloat(value) || 0;
        const newValue = current + 1;
        if (newValue <= maxLimit) {
            setValue(newValue);
        } 
        else {
            setValue(maxLimit);
        }
        setError('');
    };

    const decrement = () => {
        const current = parseFloat(value) || 0;
        const newValue = current - 1;
        if (newValue >= 0) {
            setValue(newValue);
        }
        else {
            setValue(0);
        }
            setError('');
    };

    return (
        <div className="dark:text-Dtext flex flex-row items-center gap-0 w-fit h-fit  border border-pri dark:border-Dpri rounded-md">
            <button 
                className="hover:bg-pri dark:hover:bg-Dpri p-2 rounded-l hover:text-Dtext duration-200" 
                onClick={decrement}
                disabled={parseFloat(value) <= 0 || isDisabled}
                aria-label="Decrease value"
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 11h18v2H3z"></path></svg>
            </button>
    
            <input
                type="number"
                value={value}
                disabled={isDisabled}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                min="0"
                max={maxLimit}
                step="1"
                className="outline-none text-center w-10 p-1 border-x dark:bg-DSBG bg-SBG border-pri dark:border-Dpri"
                aria-label="Positive number input"
            />
    
            <button 
                className="hover:bg-pri dark:hover:bg-Dpri p-2 rounded-r hover:text-Dtext duration-200" 
                onClick={increment}
                disabled={parseFloat(value) >= maxLimit || isDisabled}
                aria-label="Increase value"
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>    
            </button>
        </div>
    )
}

export default QuantityInput