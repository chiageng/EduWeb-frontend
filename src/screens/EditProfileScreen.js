import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, Container } from "@mui/material";
import ProfileSettings from "../components/profile/ProfileSettings";
import ProfileForm from "../components/forms/ProfileForm";
import { editProfile, viewProfile } from "../actions/userActions";
import { EDIT_PROFILE_RESET, VIEW_PROFILE_RESET } from "../constants/user";

function MyProfileScreen() {
  const [name, setName] = useState("");
  const [examTitle, setExamTitle] = useState("");
  const [gradeYear, setGradeYear] = useState("");
  const [school, setSchool] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const profileView = useSelector((state) => state.profileView);
  const { loading, user, error } = profileView;

  const profileEdit = useSelector(state => state.profileEdit);
  const { success } = profileEdit;

  const onClick = (e) => {
    console.log({
      name,
      examTitle,
      gradeYear,
      school,
      gender,
      phoneNumber,
      address1,
      address2,
      postalCode,
      state,
      country,
    });
    dispatch(
      editProfile({
        name,
        examTitle,
        gradeYear,
        school,
        gender,
        phoneNumber,
        address1,
        address2,
        postalCode,
        state,
        country,
      })
    );
  };

  useEffect(() => {
    if (!user) {
      dispatch(viewProfile());
    }
    if (user) {
      setName(user.name)
      setExamTitle(user.exam_title);
      setGradeYear(user.grade_year);
      setGender(user.gender);
      setPhoneNumber(user.phone_number);
      setAddress1(user.address1);
      setAddress2(user.address2);
      setState(user.state);
      setCountry(user.country);
      setPostalCode(user.postal_code);
      setSchool(user.school);
    }
    if (success) {
      navigate(`/myprofile`)
      dispatch({type: EDIT_PROFILE_RESET})
      dispatch({type: VIEW_PROFILE_RESET})
    }
  }, [user, location, success]);

  return (
    <>
      <Container>
        <Box pb={10}>
          {/* Webpage display */}
          <Grid container display={{ xs: "none", md: "flex" }}>
            <Grid item md={3} mr={6}>
              <ProfileSettings />
            </Grid>
            <Grid item md={8}>
              <ProfileForm
                onClick={onClick}
                name={name}
                examTitle={examTitle}
                gradeYear={gradeYear}
                school={school}
                gender={gender}
                phoneNumber={phoneNumber}
                address1={address1}
                address2={address2}
                postalCode={postalCode}
                state={state}
                country={country}
                setName={setName}
                setExamTitle={setExamTitle}
                setGradeYear={setGradeYear}
                setSchool={setSchool}
                setGender={setGender}
                setPhoneNumber={setPhoneNumber}
                setAddress1={setAddress1}
                setAddress2={setAddress2}
                setPostalCode={setPostalCode}
                setState={setState}
                setCountry={setCountry}
              />
            </Grid>
          </Grid>

          {/* Phone Display */}
          <Grid container display={{ xs: "block", md: "none" }}>
            <Grid item xs={12}>
              <ProfileSettings />
            </Grid>
            <Grid item xs={12}>
              <ProfileForm
                onClick={onClick}
                name={name}
                examTitle={examTitle}
                gradeYear={gradeYear}
                school={school}
                gender={gender}
                phoneNumber={phoneNumber}
                address1={address1}
                address2={address2}
                postalCode={postalCode}
                state={state}
                country={country}
                setName={setName}
                setExamTitle={setExamTitle}
                setGradeYear={setGradeYear}
                setSchool={setSchool}
                setGender={setGender}
                setPhoneNumber={setPhoneNumber}
                setAddress1={setAddress1}
                setAddress2={setAddress2}
                setPostalCode={setPostalCode}
                setState={setState}
                setCountry={setCountry}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default MyProfileScreen;
