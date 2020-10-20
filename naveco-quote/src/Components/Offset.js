import React, {useState} from 'react';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
  CircularThumb,
  useCircularInputContext
} from 'react-circular-input'

const CustomComponent = () => {
	const { getPointFromValue, value } = useCircularInputContext()
	const { x, y } = getPointFromValue()

	return (
		<text x={x} y={y} textAnchor="middle" dy="0.35em" fill="rgb(0,0,255)" font-size= "calc(5px + 2vmin)" style={{ pointerEvents: 'none', fontWeight: "bold" }}>
			{Math.round(value * 100)}
		</text>
	)
}

export default function Offset (props) {
	const [value, setValue] = useState(0.25)

	return (
      <CircularInput value={value} onChange={setValue}>
			<CircularTrack />
			<CircularProgress  stroke="rgb(0, 0, 255)" />
			<CircularThumb fill="white" stroke="rgb(0, 0, 255)" strokeWidth="5" />
      <CustomComponent/>
    </CircularInput>
    
	);
}