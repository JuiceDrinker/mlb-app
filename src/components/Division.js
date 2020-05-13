import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function Division({ data, divisionName }) {
  return (
    <div>
      <Typography variant="h6" id="tableTitle" component="div">
        {divisionName}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Team Name </TableCell>
              <TableCell> Wins </TableCell>
              <TableCell> Losses </TableCell>
              <TableCell> GB </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((teamStats) => {
              const [name, wins, losses, gamesBack] = teamStats;
              return (
                <TableRow>
                  <TableCell> {name} </TableCell>
                  <TableCell> {wins} </TableCell>
                  <TableCell> {losses} </TableCell>
                  <TableCell>{gamesBack === null ? "-" : gamesBack} </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Division;
