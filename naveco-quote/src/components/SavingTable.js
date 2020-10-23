import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import style from '../styles/SavingTableStyle';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles(style),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles(style),
)(TableRow);

function createData(month: string, monthlyProduction: number, value: number, grid: number) {
  return {month, monthlyProduction, value, grid };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const rate = 0.12;


  const rows = []
  for (let i = 0; i < months.length; i++) {
    rows.push(createData(months[i], props.acMontly[i], props.acMontly[i] * rate , props.acMontly[i] * rate -props.monthlyAmount));
  }

  return (
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
              <StyledTableCell align="right">{row.monthlyProduction}</StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
              <StyledTableCell align="right">{row.grid}</StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
