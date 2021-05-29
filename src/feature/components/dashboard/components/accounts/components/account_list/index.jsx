import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import CreateIcon from '@material-ui/icons/Create';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import Select from '@material-ui/core/Select';
import userApi from "../../../../../../../api/userApi";

const AccountList = ({ ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  var customers = [
    {
      id: "60768f44c3f0a0ade9846736",
      avatarUrl: "https://picsum.photos/seed/picsum/200/300",
      name: "Lê Xuân Hiếu",
      email: "xuanhieu.le.1999@gmail.com ",
      role: "student",
      status: "active",
    },
    {
      id: "607bd8e8c3f0a0ade9846772",
      avatarUrl: "https://picsum.photos/seed/picsum/200/300",
      name: "Đoàn Trung Thông",
      email: "doanthong002@gmail.com ",
      role: "teacher",
      status: "active",
    },
    {
      id: "607bd8e8c3f0a0ade9846773",
      avatarUrl: "https://picsum.photos/seed/picsum/200/300",
      name: "Lê Thanh Hà",
      email: "ThanhHa002@gmail.com ",
      role: "student",
      status: "block",
    },
    {
      id: "607bd8e8c3f0a0ade9846774",
      avatarUrl: "https://picsum.photos/seed/picsum/200/300",
      name: "Ngô Ngọc Mỹ",
      email: "NgocMy@gmail.com ",
      role: "student",
      status: "block",
    },
  ];

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const [role, setRole] = React.useState("");
 
  const handleChange = (event) => {
    // const name = event.target.value;
    // setRole({
    //   ...role,
    //   [name]: event.target.value,
    // });
    setRole(event.target.value);
    console.log(role);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>id</TableCell>
                <TableCell>Tên</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Vai trò</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                        {customer.name}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{customer.email}</TableCell>
                  <TableCell onClick={async () => {
                    let data = {
                      _id: "60685a95a8953bc885582b75" ,
                      role: "teacher",
                      topics: "607bd8e8c3f0a0ade9846772"
                    }
                    await userApi.updateRole(data);
                  }}>
                  {customer.role} <CreateIcon fontSize='inherit' />
                    {/* {moment(customer.createdAt).format('DD/MM/YYYY')} */}
                    {/* <Select
                      native

                      onChange={async (event) =>  {
                        let data = {
                          _id: customer.id,
                          role: event.target.value,
                          topics: ''
                        }
                        // await userApi.updateRole(data);
                        setRole(event.target.value);
                        console.log(event.target.value, customer.id);
                        customer.role = event.target.value;
                        console.log("re",customer.role)
                      }
                    }
                    value={customer.role}
                    >

                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="mod">Mod</option>
                      <option value="admin">Admin</option>
                    </Select> */}
                  </TableCell>
                  <TableCell >
                    {/* {moment(customer.createdAt).format('DD/MM/YYYY')} */}
                    {customer.status == "active" ? "Khóa" : "Mở khóa"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AccountList.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default AccountList;
