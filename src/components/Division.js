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
            {data.map((teamStats, index) => {
              const [name, wins, losses, gamesBack] = teamStats;
              return (
                <TableRow>
                  <TableCell key={name}> {name} </TableCell>
                  <TableCell key={index + name}> {wins} </TableCell>
                  <TableCell key={index + losses}> {losses} </TableCell>
                  <TableCell key={index + gamesBack}>
                    {gamesBack === null ? "-" : gamesBack}{" "}
                  </TableCell>
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
