import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Query, Solution, Documents) {
  return {Query, Solution, Documents };
}

const rows = [
  createData('How are you?', 'I am Fine', 6.0,),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SpecialTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Query</TableCell>
            <TableCell align="center">Solution</TableCell>
            <TableCell align="center">Documents</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Query}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Query}
              </TableCell>
              <TableCell align="center">{row.Solution}</TableCell>
              <TableCell align="center">{row.Documents}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
