import React, {useState} from 'react';
import './Offset.css';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
  CircularThumb,
} from 'react-circular-input'
import {Card} from "tabler-react";

export default function Offset (props) {
	//const [value, setValue] = useState(0.5)
	console.log('inside offset', props);
	
	const stepValue = v => Math.round(v * 10) / 10

return (

	<Card>
        <Card.Header>
          <Card.Title>Monthly Offset</Card.Title>
        </Card.Header>
        <Card.Body className="offset">
					<CircularInput
						value={stepValue(props.offset)}
						onChange={v => props.handleChange(v)}
						radius={75}
	  >
			<CircularTrack />
			<CircularProgress radius = '10px' />
			<CircularThumb />

			<text x={80} y={80} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="14">
				{Math.round(stepValue(props.offset) * 100)}%
			</text>
		</CircularInput>
        </Card.Body>
      </Card>
	// <Card title={'Bill Offset'}
	// className="offset"
	//  body = {
	// 	<CircularInput
	// 	value={stepValue(value)}
	// 	onChange={v => setValue(stepValue(v))}
	// 	radius={75}
		
	//   >
	// 		<CircularTrack />
	// 		<CircularProgress radius = '10px' />
	// 		<CircularThumb />

	// 		<text x={80} y={80} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="14">
	// 			{Math.round(stepValue(value) * 100)}%
	// 		</text>
	// 	</CircularInput>
//	}/>
	
    
	);
}