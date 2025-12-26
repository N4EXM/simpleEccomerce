import React, { useState, useRef, useCallback, useEffect } from 'react';

const DualRangeSlider = ({
    min = 0,
    max = 100,
    step = 1,
    initialMin = 0,
    initialMax = 0,
    onChange = () => {}
    }) => {
    const [minVal, setMinVal] = useState(initialMin);
    const [maxVal, setMaxVal] = useState(initialMax);
    const rangeRef = useRef(null);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const currentDrag = useRef(null);

    const getPercent = useCallback(
        (value) => ((value - min) / (max - min)) * 100,
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (rangeRef.current) {
        rangeRef.current.style.left = `${minPercent}%`;
        rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    const handleMouseDown = (type) => {
        isDragging.current = true;
        currentDrag.current = type;
        
        const handleMouseMove = (e) => {
        if (!isDragging.current || !containerRef.current) return;
        
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        let percent = (offsetX / rect.width) * 100;
        
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        
        const value = min + (percent / 100) * (max - min);
        const roundedValue = Math.round(value / step) * step;
        
        if (currentDrag.current === 'min') {
            const newValue = Math.min(roundedValue, maxVal - step);
            setMinVal(newValue);
            onChange({ min: newValue, max: maxVal });
        } else {
            const newValue = Math.max(roundedValue, minVal + step);
            setMaxVal(newValue);
            onChange({ min: minVal, max: newValue });
        }
        };
        
        const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="relative h-10 w-full">
            {/* Background track */}
            <div className="absolute top-1/2 w-full h-2 bg-Daccent dark:bg-DBG rounded-full -translate-y-1/2"></div>
        
            {/* Selected range */}
            <div 
                ref={rangeRef}
                className="absolute top-1/2 h-2 bg-pri dark:bg-Dpri rounded-full -translate-y-1/2"
            ></div>
        
            {/* Min thumb */}
            <div
                className="absolute top-1/2 w-4 h-4 bg-SBG border-4 border-pri dark:border-Dpri rounded-full shadow-lg 
                    cursor-grab active:cursor-grabbing -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${getPercent(minVal)}%` }}
                onMouseDown={() => handleMouseDown('min')}
            />
        
            {/* Max thumb */}
            <div
                className="absolute top-1/2 w-4 h-4 bg-SBG border-4 border-pri dark:border-Dpri rounded-full shadow-lg 
                    cursor-grab active:cursor-grabbing -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${getPercent(maxVal)}%` }}
                onMouseDown={() => handleMouseDown('max')}
            />
        </div>
    );
};

    export default DualRangeSlider;