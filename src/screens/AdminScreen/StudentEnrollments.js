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
  Avatar,
} from "@mui/material";
import {
  activeBorderBlueButton,
  green,
  hotPink,
  hotPinkPale,
  hoverBorderBlueButton,
  neural100,
  neural300,
  neural500,
  neural900,
  orangeLight,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  purplishBlue,
  purplishBlueDark,
  purplishBlueLight,
  purplishBlueMedium,
  purplishBluePale,
  red,
  white,
} from "../../design/color";
import { useDispatch, useSelector } from "react-redux";
import {
  approveStudentsEnrollment,
  checkStudentsEnrollment,
  removeStudentsEnrollment,
  updateStudentsEnrollment,
  viewCourse,
} from "../../actions/courseActions";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fontType } from "../../design/font";
import Loader from "../../components/universal/Loader";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import { nanoid } from "@reduxjs/toolkit";
import { Div } from "../../navbar/AdminAppBar";

const columns = [
  { id: "name", label: "Student", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  {
    id: "progress",
    label: "Progress",
    minWidth: 200,
    align: "center",
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

  function createData(user, enrollment) {
    const status = enrollment ? (
      <TableCell align="center" key={nanoid()} sx={{ backgroundColor: green }}>
        <Typography
          sx={{
            textDecoration: "none",
            fontType: fontType,
            fontWeight: 400,
            fontSize: 16,
          }}
          color={neural900}
        >
          Enrolled
        </Typography>
      </TableCell>
    ) : (
      <TableCell align="center" key={nanoid()} sx={{ backgroundColor: red }}>
        <Typography
          sx={{
            textDecoration: "none",
            fontType: fontType,
            fontWeight: 400,
            fontSize: 16,
          }}
          color={neural900}
        >
          Requested
        </Typography>
      </TableCell>
    );

    const nameOutput = (
      <TableCell key={nanoid()}>
        <Grid container display="flex">
          <Grid item>
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={user.image && user.image.Location}
            ></Avatar>
          </Grid>
          <Grid item mt={0.6} ml={1}>
            {" "}
            <Typography
              sx={{
                textDecoration: "none",
                fontType: fontType,
                fontWeight: 400,
                fontSize: 16,
                textTransform: "capitalize",
              }}
              color={neural900}
            >
              {user.name}
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
    );
    const actionOutput = enrollment ? (
      <TableCell key={nanoid()}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            color: purplishBlueDark,
            borderRadius: 2,
            textTransform: "capitalize",
            fontSize: 12,
            fontWeight: 600,
            borderColor: activeBorderBlueButton,
            backgroundColor: white,
            ":hover": {
              borderColor: hoverBorderBlueButton,
            },
            ":focus": {
              bgcolor: pressedBorderBackgroundBlueButton,
              borderColor: pressedBorderBlueButton,
            },
          }}
          endIcon={<DeleteOutlineOutlinedIcon />}
          onClick={() => removeEnrollment(user._id)}
        >
          Remove Enrollment
        </Button>
      </TableCell>
    ) : (
      <TableCell key={nanoid()}>
        <Button
          sx={{
            backgroundColor: purplishBlue,
            fontFamily: fontType,
            color: white,
            fontSize: 12,
            borderRadius: 2,
            fontWeight: 600,
            width: "100%",
            borderRadius: 3,
            textDecoration: "none",
            textTransform: "capitalize",
            ":hover": { backgroundColor: purplishBlueMedium },
            ":focus": { backgroundColor: purplishBlueDark },
          }}
          endIcon={<CheckCircleOutlinedIcon />}
          onClick={() => handleEnrollment(user._id)}
        >
          Accept Enrollment
        </Button>
      </TableCell>
    );
    const progress = (
      <TableCell>
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress
              variant="determinate"
              value={50}
              sx={{
                backgroundColor: neural100,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: green,
                },
                height: 24,
                borderRadius: 3,
              }}
            />
          </Box>
          <Typography variant="body2" color={neural500} fontWeight={600}>
            50%
          </Typography>
        </Box>
      </TableCell>
    );
    return {
      name: nameOutput,
      status,
      action: actionOutput,
      progress,
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

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  const rows =
    enrollment &&
    enrollment.map((item) => createData(item.user, item.enrollment.enroll));

  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        as={Link}
        to="/admin"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/admin/courses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Students
      </Typography>
      <Typography
        as={Link}
        to="/admin/courses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Students Enrollment
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
        textTransform="capitalize"
      >
        {course && course.title}
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
    <>
      <Div style={{ backgroundColor: white }}>
        {breadcrumb}

        <Grid container mb={2}>
          <Grid item xs={12} md={5.75}>
            <Typography
              variant="h3"
              fontFamily="Poppins"
              sx={{
                fontSize: 24,
                fontWeight: 600,
                fontStyle: "normal",
                color: neural900,
                mb: "18px",
              }}
            >
              Student Enrollment
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Poppins"
              sx={{
                fontSize: 16,
                fontWeight: 600,
                fontStyle: "normal",
                color: neural500,
                textTransform: "capitalize",
              }}
            >
              {course && course.title}
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
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

          <Grid item xs={false} md={0.25}></Grid>

          <Grid item xs={12} md={3} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item mr={2}>
                <Typography
                  variant="h3"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: neural900,
                  }}
                >
                  Sort by
                </Typography>
              </Grid>
              <Grid item>
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
                    sx={{
                      minWidth: "200px",
                      backgroundColor: white,
                      fontSize: 14,
                    }}
                  >
                    <MenuItem value="enrolled">Enrolled</MenuItem>
                    <MenuItem value="requested">Requested</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Div>

      <Div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Box ml={2} my={2}>
            <Typography
              variant="h3"
              fontFamily="Poppins"
              sx={{
                fontSize: 16,
                fontWeight: 600,
                fontStyle: "normal",
                color: neural900,
              }}
            >
              All Students
            </Typography>
          </Box>

          <TableContainer sx={{ maxHeight: 600 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{
                "& .MuiTableCell-body": {
                  // border: ` 1px solid ${neural100}`,
                  p: 2,
                  borderBottom: "none",
                },
              }}
            >
              <TableHead sx={{ fontWeight: 500, backgroundColor: purplishBlue, color: purplishBlueDark }}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.label}

                      style={{ minWidth: column.minWidth }}
                      sx={{
                        fontWeight: 600,
                        backgroundColor: white,
                        color: neural300,
                      }}
                    >
                      {column.label}
                    </TableCell>
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
                          key={nanoid()}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <React.Fragment key={nanoid()}>
                                {value}
                              </React.Fragment>
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
      </Div>
    </>
  );
}
