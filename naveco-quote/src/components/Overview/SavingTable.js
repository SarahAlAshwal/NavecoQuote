import React, {useContext} from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {formatNumbers} from '../../helpers/formatNumbers';
import {calculateAcMonthlyForManyYears} from '../../helpers/overviewCalculation';
import {Card} from "tabler-react";
import StateContext from '../../StateContext';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "orange",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    }}),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({ 
    root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    }
  },
}),
)(TableRow);

function createData(month: string, monthlyProduction: number, value: number, grid: number) {
  return {month, monthlyProduction, value, grid };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  redClass: {
    color: 'red',
  },
  greenClass: {
    color: 'green',
  },
});

export default function CustomizedTables() {
  const state = useContext(StateContext);
  const classes = useStyles();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
  const tableData = calculateAcMonthlyForManyYears(state.acMonthly, state.monthlyAmount, state.rate);

  const rows = []

  for (let i = 0; i < months.length; i++) {
    rows.push(createData(months[i], tableData[state.year].acMonthly[i],tableData[state.year].acMonthlyValue[i], tableData[state.year].grid[i]));
  }

  return (
    <Card body = {
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Month</StyledTableCell>
            <StyledTableCell align="right">Monthly Production (KWh) </StyledTableCell>
            <StyledTableCell align="right">Monthly Production Value ($)</StyledTableCell>
            <StyledTableCell align="right">Grid Usage/Credit ($)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.month}>
              <StyledTableCell component="th" scope="row">
                {row.month}
              </StyledTableCell>
              <StyledTableCell align="right">{formatNumbers(row.monthlyProduction)}</StyledTableCell>
              <StyledTableCell align="right">{formatNumbers(row.value)}</StyledTableCell>
              <StyledTableCell align="right" className={row.grid > 0 ? classes.greenClass : classes.redClass}>{formatNumbers(row.grid)}</StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }/>
    
  );
}
