import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, Container } from "@mui/material";
import ProfileSettings from "../components/profile/ProfileSettings";
import ProfileForm from "../components/forms/ProfileForm";
import { editProfile, viewProfile } from "../actions/userActions";
import { EDIT_PROFILE_RESET, VIEW_PROFILE_RESET } from "../constants/user";
import { deleteImage, uploadImage } from "../actions/uploadActions";

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
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("")
  const [background, setBackground] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const profileView = useSelector((state) => state.profileView);
  const { loading, user, error } = profileView;

  const profileEdit = useSelector(state => state.profileEdit);
  const { success } = profileEdit;

  const handleSaveProfile = (e) => {
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
        image,
        background,
      })
    );
  };

  const handleEditPhoto = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview, setImage));
  }

  const handleEditBackground = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview, setBackground));
  }

  const removeBackground = (e) => {
    dispatch(deleteImage(background, setPreview, setBackground));
  }

  const handleCancel= (e) => {
    navigate('/myprofile')
  }

  useEffect(() => {
    if (!user) {
      dispatch(viewProfile());
    }
    if (user) {
      setName(user.name)
      user.exam_title ? setExamTitle(user.exam_title) : setExamTitle("");
      user.grade_year ? setGradeYear(user.grade_year) : setGradeYear("");
      user.gender ? setGender(user.gender) : setGender("");
      user.phone_number ? setPhoneNumber(user.phone_number) : setPhoneNumber("");
      user.address1 ? setAddress1(user.address1) : setAddress1("");
      user.address2 ? setAddress2(user.address2) : setAddress2("");
      user.state ? setState(user.state) : setState("");
      user.country ? setCountry(user.country) : setCountry("");
      user.postal_code ? setPostalCode(user.postal_code) : setPostalCode("");
      user.school ? setSchool(user.school) : setSchool("");
      user.image ? setImage(user.image) : setImage("");
      user.background? setBackground(user.background) : setBackground("");
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
                handleSaveProfile={handleSaveProfile}
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
                handleEditPhoto={handleEditPhoto}
                image={image && image.Location}
                handleCancel={handleCancel}
                handleEditBackground={handleEditBackground}
                background={background && background.Location}
                removeBackground={removeBackground}
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
                handleSaveProfile={handleSaveProfile}
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
                handleEditPhoto={handleEditPhoto}
                image={image && image.Location}
                background={background && background.Location}
                handleEditBackground={handleEditBackground}
                removeBackground={removeBackground}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default MyProfileScreen;
