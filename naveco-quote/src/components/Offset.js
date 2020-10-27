import React, {useState} from 'react';
import './Offset.css';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
  CircularThumb,
} from 'react-circular-input'

export default function Offset (props) {
	const [value, setValue] = useState(0.25)
	
	const stepValue = v => Math.round(v * 10) / 10

return (
	<CircularInput
		value={stepValue(value)}
		onChange={v => setValue(stepValue(v))}
	>
		<CircularTrack />
		<CircularProgress radius = '10px' />
		<CircularThumb />

		<text x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold">
			{Math.round(stepValue(value) * 100)}%
		</text>
	</CircularInput>
    
	);
}