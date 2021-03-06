import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { VotesMap, UserMap } from "../../../../types";
interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

interface ScreenProps {
  users: UserMap;
  votes: VotesMap;
  setActivity: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<number>>;
}

const Screen: FunctionComponent<ScreenProps> = ({
  users,
  votes,
  setActivity,
  setValue,
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<{ [activity: string]: string }[]>([]);
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  const columns: Column[] = Object.keys(users)
    .sort((a, b) => users[a].localeCompare(users[b]))
    .reduce(
      (acc: Column[], userID: string): Column[] => {
        const username = users[userID];
        const column: Column = {
          id: userID,
          label: username,
          minWidth: 170,
          align: "right",
          format: (value: number) => value.toLocaleString("en-US"),
        };

        return [...acc, column];
      },
      [{ id: "activity", label: "Activity", minWidth: 170 }]
    );

  const createData = (activity: string, votes: { [id: string]: number }) => {
    return Object.keys(votes).reduce(
      (acc, userID) => ({ ...acc, [userID]: votes[userID] }),
      { activity }
    );
  };

  useEffect(() => {
    return setRows(
      Object.keys(votes).map((activity) =>
        createData(activity, votes[activity])
      )
    );
  }, [votes]);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${i}-row`}
                    onClick={() => setActivity(row.activity)}
                  >
                    {columns.map((column: Column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          onClick={() =>
                            typeof value === "number"
                              ? setValue(value)
                              : setValue(0)
                          }
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Screen;
