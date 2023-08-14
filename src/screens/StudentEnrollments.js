import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  Typography,
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Divider,
} from "@mui/material";
import {
  hotPink,
  hotPinkPale,
  neural100,
  neural300,
  neural500,
  neural900,
  orangeLight,
  purplishBlue,
  purplishBlueDark,
  purplishBlueLight,
  purplishBlueMedium,
  purplishBluePale,
  white,
} from "../design/color";
import { useDispatch, useSelector } from "react-redux";
import {
  approveStudentsEnrollment,
  checkStudentsEnrollment,
  removeStudentsEnrollment,
  updateStudentsEnrollment,
  viewCourse,
} from "../actions/courseActions";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fontType } from "../design/font";
import Loader from "../components/universal/Loader";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

const columns = [
  { id: "name", label: "Student", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  {
    id: "progress",
    label: "Progress",
    minWidth: 200 
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
  },
];

export default function StudentEnrollments() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEnrollment = (user) => {
    dispatch(approveStudentsEnrollment(params.slug, user));
  };

  const removeEnrollment = (user) => {
    dispatch(removeStudentsEnrollment(params.slug, user));
  };

  function createData(name, enrollment, user) {
    const enrollmentOutput = enrollment ? "Enrolled" : "Requested";
    const actionOutput = enrollment ? (
      // <Button
      //   sx={{
      //     backgroundColor: white,
      //     fontFamily: fontType,
      //     color: "error",
      //     fontSize: 12,
      //     variant: "outlined",
      //     px: 1,
      //     py: 1,
      //     fontWeight: 600,
      //     width: "100%",
      //     borderRadius: 3,
      //     textDecoration: "none",
      //     ":hover": { backgroundColor: hotPink },
      //   }}
      //   disabled={removeLoading}
      //   onClick={() => removeEnrollment(user)}
      // >
      //   Remove Enrollment
      // </Button>
      <Button variant="outlined" sx={{":outlined": {borderColor: purplishBlueDark}}}>
      Error
    </Button>
    ) : (
      <Button
        sx={{
          backgroundColor: purplishBlue,
          fontFamily: fontType,
          color: white,
          fontSize: 12,
          px: 1,
          py: 1,
          fontWeight: 600,
          width: "100%",
          borderRadius: 3,
          textDecoration: "none",
          ":hover": { backgroundColor: purplishBlueMedium },
          ":focus": {  backgroundColor: purplishBlueDark }
        }}
        onClick={() => handleEnrollment(user)}
      >
        Accept Enrollment
      </Button>
    );
    return {
      name,
      enrollment: enrollmentOutput,
      action: actionOutput,
      size: 1000,
      density: 1000,
    };
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [toggle, setToggle] = useState(false);

  const courseView = useSelector((state) => state.courseView);
  const { loading, course, lessons, error } = courseView;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const studentsEnrollmentCheck = useSelector(
    (state) => state.studentsEnrollmentCheck
  );
  const { loading: checkLoading, enrollment } = studentsEnrollmentCheck;

  const studentEnrollmentApprove = useSelector(
    (state) => state.studentEnrollmentApprove
  );
  const { loading: approveLoading, success } = studentEnrollmentApprove;

  const studentEnrollmentRemove = useSelector(
    (state) => state.studentEnrollmentRemove
  );
  const { loading: removeLoading, success: removeSucces } =
    studentEnrollmentRemove;

  const rows =
    enrollment &&
    enrollment.map((item) =>
      createData(item.user.name, item.enrollment.enroll, item.user._id)
    );

  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        as={Link}
        to="/mycourses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        My Course
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        as={Link}
        to={`/mycourses/${params.slug}`}
        key="1"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        color={neural500}
      >
        {course && course.title} (Instructor Page)
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Student Enrollments
      </Typography>
    </Breadcrumbs>
  );

  useEffect(() => {
    if (!user) {
      navigate("./login");
    }
    if ((user && !course) || course.slug !== params.slug) {
      dispatch(viewCourse(params.slug));
    }
    if (!enrollment) {
      dispatch(checkStudentsEnrollment(params.slug));
    }
  }, [params, userLogin, user, toggle, enrollment]);

  // After approve a student, reupdate the table
  useEffect(() => {
    dispatch(updateStudentsEnrollment(params.slug));
  }, [success, removeSucces]);

  return (
    <Container>
      <Box height="750px" pt={5} pb={10}>
        {breadcrumb}

        <Typography
          variant="h3"
          fontFamily="Poppins"
          sx={{
            fontSize: 32,
            fontWeight: 600,
            fontStyle: "normal",
            color: neural900,
            mb: "18px",
          }}
        >
          Students Enrollment
        </Typography>

        <Grid container mb={2}>
          <Grid item xs={12} md={4}>
            <TextField
              margin="normal"
              fullWidth
              value=""
              onChange={(e) => console.log(e.target.value)}
              name="search"
              label={`Search Students`}
              id="search"
              InputProps={{
                style: {
                  backgroundColor: white,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={false} md={1}></Grid>

          <Grid item xs={12} md={4} mt={2}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value=""
                label="Status"
                // onChange={handleChange}
                sx={{ minWidth: "200px", backgroundColor: white, fontSize: 14 }}
              >
                <MenuItem value="enrolled">Enrolled</MenuItem>
                <MenuItem value="requested">Requested</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{
                "& .MuiTableCell-root": {
                  border: `0.5px solid ${neural100}`,
                },
              }}
            >
              <TableHead sx={{ fontWeight: 500 }}>
                <TableRow>
                  {columns.map((column) => (
                    <>
                      <TableCell
                        key={column.id}
                        align="center"
                        style={{ minWidth: column.minWidth }}
                        sx={{
                          fontWeight: 600,
                          backgroundColor: white,
                          color: neural300
                        }}
                      >
                        {column.label}
                      </TableCell>
                    </>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows &&
                  rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.name}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
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
            count={rows ? rows.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Container>
  );
}
