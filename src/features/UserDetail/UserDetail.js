import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// material core
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { TableBody } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import TablePagination from "@material-ui/core/TablePagination";
import Container from "@material-ui/core/Container";
// actions
import { actHideLoading, actShowLoading } from "../../actions/loading.action";

import { apiUser } from "../../services";

// components
import ButtonComponent from "../../components/Button/Button";

// use theme
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  search: {
    margin: "0",
  },
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  tableWrapper: {
    overflowX: "auto",
  },
}));

function UserDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const history = useHistory();
  const fetchAllData = useCallback(async () => {
    dispatch(actShowLoading());
    const res = await apiUser.data({ limit, offset });
    dispatch(actHideLoading());
    setData(res.data);
  }, [limit, offset]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const handleChangePage = (event, newPage) => {
    setOffset(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setOffset(0);
  };

  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    history.push("/login");
  };
  return (
    <Container fixed className="mb-3">
      <ButtonComponent
        className="mt-3 mb-2"
        content="Logout"
        onClick={handleLogout}
      />
      <Paper>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">About</TableCell>
                <TableCell align="right">Tags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 &&
                data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id + 1}</TableCell>
                    <TableCell align="left">
                      {`${row.firstName} ${row.lastName}`}
                    </TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.about}</TableCell>
                    <TableCell align="right">
                      {row.tags &&
                        row.tags.map((item) => <Chip label={item} />)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={999}
            page={offset}
            onPageChange={handleChangePage}
            rowsPerPage={limit}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default UserDetail;
