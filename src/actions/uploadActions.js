import {
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAIL,
  UPLOAD_VIDEO_REQUEST,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAIL,
  DELETE_VIDEO_REQUEST,
  DELETE_VIDEO_SUCCESS,
  DELETE_VIDEO_FAIL,
} from "../constants/upload";
import Resizer from "react-image-file-resizer";
import axios from "axios";

// export const uploadImage = (file) => async (dispatch) => {
//   dispatch({
//     type: UPLOAD_IMAGE_REQUEST,
//   });

//   // resize image before send to s3
//   Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       let { data } = await axios.post("/api/course/upload-image", {
//         image: uri,
//       },
//       config
//       );

//       dispatch({
//         type: UPLOAD_IMAGE_SUCCESS,
//         payload: data,
//       });

//     } catch (error) {
//       dispatch({
//         type: UPLOAD_IMAGE_FAIL,
//         payload: error.response.data,
//       });
//     }
//   });
// };

export const uploadImage = (file, setPreview, setImage) => async (dispatch) => {
  try {
    dispatch({
      type: UPLOAD_IMAGE_REQUEST,
    });

    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      let { data } = await axios.post(
        "/api/course/upload-image",
        {
          image: uri,
        },
        config
      );

      setPreview(data.Location);
      setImage(data);

      dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: data,
      });
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_IMAGE_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteImage =
  (image, setPreview, setImage) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_IMAGE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "/api/course/remove-image",
        { image },
        config
      );

      setPreview("");
      setImage();

      dispatch({
        type: DELETE_IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_IMAGE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const uploadVideo =
  (file, setProgress, setVideo, setVideoFile, setUploading) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPLOAD_VIDEO_REQUEST,
      });

      setProgress(0);
      setUploading(true);

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const videoData = new FormData();
      videoData.append("video", file);

      const { data } = await axios.post("/api/course/video-upload", videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        },
      });

      setVideo(data);
      setVideoFile(file.name);
      setUploading(false);

      dispatch({
        type: UPLOAD_VIDEO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_VIDEO_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteVideo =
  (video, setProgress, setVideo, setVideoFile, setUploading) =>
  async (dispatch) => {
    try {
      dispatch({
        type: DELETE_VIDEO_REQUEST,
      });

      setUploading(true);

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/course/remove-video",
        { video },
        config
      );

      setVideo();
      setProgress(0);
      setUploading(false);
      setVideoFile("");

      dispatch({
        type: DELETE_VIDEO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      setUploading(false);
      dispatch({
        type: DELETE_VIDEO_FAIL,
        payload: error.response.data,
      });
    }
  };
