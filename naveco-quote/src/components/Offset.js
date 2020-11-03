import React, {useContext} from 'react';
import './Offset.css';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
  CircularThumb,
} from 'react-circular-input'
import {Card} from "tabler-react";
import StateContext from '../StateContext';

export default function Offset (props) {

	const state = useContext(StateContext);
	
	const stepValue = v => Math.round(v * 10) / 10

return (

	<Card>
        <Card.Header>
          <Card.Title>Monthly Offset</Card.Title>
        </Card.Header>
        <Card.Body className="offset">
					<CircularInput
						value={stepValue(state.offset)}
						onChange={v => props.handleChange(v)}
						radius={75}
	  >
			<CircularTrack />
			<CircularProgress radius = '10px' />
			<CircularThumb />

			<text x={80} y={80} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="14">
				{Math.round(stepValue(state.offset) * 100)}%
			</text>
		</CircularInput>
        </Card.Body>
      </Card>    
	);
}