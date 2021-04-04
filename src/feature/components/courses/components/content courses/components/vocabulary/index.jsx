import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  fontText1:{
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
    fontWeight:"700"
  },
  fontText:{
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
    fontWeight:"600"
  }
});

function createData(vocabulary,wordClass ,pronounce, means) {
  return { vocabulary, wordClass, pronounce, means };
}

const rows = [
  createData('department','N' ,"dəˈpärtmənt", 'Phòng ban'),
  createData('encouragement', 'N', "inˈkərijmənt", 'Sự khuyến khích'),
  createData('advertisement','N', "'advərˌtīzmənt", 'Quảng cáo'),
  
];

export default function Vocabulary() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className={classes.fontText1}>Từ vựng</TableCell>
            <TableCell className={classes.fontText1}  align="center">Từ loại &nbsp;</TableCell>
            <TableCell className={classes.fontText1}  align="center">Phát âm &nbsp;(US)</TableCell>
            <TableCell className={classes.fontText1} align="center">Nghĩa tiếng việt</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.fontText} component="th" scope="row">
                {row.vocabulary}
              </TableCell>
              <TableCell className={classes.fontText} align="center">{row.wordClass}</TableCell>
              <TableCell className={classes.fontText} align="center">{row.pronounce}</TableCell>
              <TableCell className={classes.fontText} align="center">{row.means}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
