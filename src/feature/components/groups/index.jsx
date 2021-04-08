import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import ReactPaginate from "react-paginate";
import groupsApi from "../../../api/groupsApi";
import GroupList from "./components/groupList";
import HeaderGroups from "./components/Header";
import Pagination from "./components/pagination";
import "./components/pagination/style.css";
Groups.propTypes = {};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexWrap: "wrap",
  },
  paginationcss:{
    margin:"30rem"
  }
}));

function Groups(props) {
  const classes = useStyles();

  const [roomName, setRoomName] = useState("Nhóm");
  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [groupsPerPage, setGroupsPerPage] = useState(8);

  useEffect(() => {
    const params = {
      _limit: 10,
    };
    const fetchGroups = async () => {
      setLoading(true);
      const groupList = await groupsApi.getAll(params);
      setGroups(groupList);
      setLoading(false);
    };
    fetchGroups();
  }, []);

  // get current groups
  const pagesVisited = pageNumber * groupsPerPage;

  const currentGroups = groups.slice(
    pagesVisited,
    pagesVisited + groupsPerPage
  );
  // const [pageNumber, setPageNumber] = useState(0);

  // // Change page
  // const paginate = (pageNumber) => (pageNumber)
  const pageCount = Math.ceil(groups.length / groupsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log(groups);
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CssBaseline />
            <HeaderGroups />
            <Paper className={classes.paper}>
              <GroupList
                groups={currentGroups}
                handleRoomNameChange={handleRoomNameChange}
                loading={loading}
              />
              <ReactPaginate
               className={classes.paginationcss}
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Groups;
