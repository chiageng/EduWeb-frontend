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
} from "@mui/material";
import {
  hotPink,
  hotPinkPale,
  neural500,
  neural900,
  orangeLight,
  purplishBlueLight,
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

const columns = [
  { id: "name", label: "Student Name", minWidth: 170 },
  { id: "enrollment", label: "Enrollment", minWidth: 100 },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
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
    const enrollmentOutput = enrollment ? "Enrolled" : "Requested"
    const actionOutput = enrollment ? (
      <Button
        sx={{
          backgroundColor: hotPink,
          fontFamily: fontType,
          color: neural900,
          fontSize: 12,
          px: 1,
          py: 1,
          fontWeight: 600,
          width: "100%",
          borderRadius: 3,
          textDecoration: "none",
          ":hover": { backgroundColor: hotPink },
        }}
        disabled={removeLoading}
        onClick={() => removeEnrollment(user)}
      >
        Remove Enrollment
      </Button>
    ) : (
      <Button
        sx={{
          backgroundColor: orangeLight,
          fontFamily: fontType,
          color: neural900,
          fontSize: 12,
          px: 1,
          py: 1,
          fontWeight: 600,
          width: "100%",
          borderRadius: 3,
          textDecoration: "none",
          ":hover": { backgroundColor: orangeLight },
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

  const studentEnrollmentApprove = useSelector( (state) => state.studentEnrollmentApprove );
  const { loading:approveLoading, success } = studentEnrollmentApprove;

  const studentEnrollmentRemove = useSelector(state => state.studentEnrollmentRemove);
  const { loading:removeLoading, success:removeSucces } = studentEnrollmentRemove;

  const rows =
    enrollment &&
    enrollment.map((item) =>
      createData(
        item.user.name,
        item.enrollment.enroll,
        item.user._id
      )
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

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ fontWeight: 500 }}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{
                        fontWeight: 600,
                        backgroundColor: purplishBlueLight,
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
