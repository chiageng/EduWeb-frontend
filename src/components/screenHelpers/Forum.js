import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { fontType } from "../../design/font";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import moment from "moment";
import {
  neural300,
  neural900,
  purplishBluePale,
  purplishBlue,
  neural700,
  purplishBlueDark,
  white,
} from "../../design/color";
import { useDispatch } from "react-redux";
import Loader from "../universal/Loader";

export default function Forum({
  comment,
  setComment,
  submitComment,
  comments,
  scrollRef,
  currentUser,
  loading,
  upVote,
  downVote,
}) {
  const item =
    comments &&
    comments.map((obj) => (
      <Box sx={{ py: "8px" }} key={obj.comment._id} component="div" ml={2}>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={1} display="block" mt={1}>
            <CardMedia
              sx={{ height: 32, width: 32 }}
              image="/images/avatar.jpg"
            />
          </Grid>

          <Grid item xs={10} sm={11} display="block" mt={1}>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural900,
                pt: 0.5,
              }}
            >
              {obj.user.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: fontType,
                fontWeight: 400,
                color: neural300,
                pt: 0.5,
              }}
            >
              {moment.utc(obj.comment.createdAt).local().startOf('seconds').fromNow()}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: fontType,
                fontWeight: 400,
                color: neural900,
                pt: 0.5,
              }}
            >
              {obj.comment.comment}
            </Typography>
            <Grid container mt={1} display="flex">
              <Grid item mt={0.25}>
                <>
                  {!obj.upvote && (
                    <ThumbUpOffAltIcon
                      onClick={() => upVote(obj.comment._id)}
                      sx={{
                        ":hover": { cursor: "pointer" },
                      }}
                    />
                  )}
                  {obj.upvote && (
                    <ThumbUpIcon
                      onClick={() => upVote(obj.comment._id)}
                      sx={{
                        ":hover": { cursor: "pointer" },
                        color: purplishBlue,
                      }}
                    />
                  )}
                </>
              </Grid>

              <Grid item ml={1}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: fontType,
                    fontWeight: 400,
                    color: neural900,
                    pt: 0.5,
                  }}
                >
                  {obj.comment.upvote}
                </Typography>
              </Grid>

              <Grid item mt={0.25} ml={2}>
              <>
                  {!obj.downvote && (
                    <ThumbDownOffAltIcon
                      onClick={() => downVote(obj.comment._id)}
                      sx={{
                        ":hover": { cursor: "pointer" },
                      }}
                    />
                  )}
                  {obj.downvote && (
                    <ThumbDownIcon
                      onClick={() => downVote(obj.comment._id)}
                      sx={{
                        ":hover": { cursor: "pointer" },
                        color: purplishBlue,
                      }}
                    />
                  )}
                </>
              </Grid>

              <Grid item ml={1}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: fontType,
                    fontWeight: 400,
                    color: neural900,
                    pt: 0.5,
                  }}
                >
                  {obj.comment.downvote}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    ));

  useEffect(() => {
    if (item && scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [item]);

  return (
    <Card
      sx={{
        display: "block",
        borderRadius: "10px",
        mb: "16px",
        width: "100%",
        height: "430px",
      }}
    >
      {loading && <Loader />}
      {!loading && (
        <>
          {/* Comment session */}
          <CardContent sx={{ py: "8px" }}>
            <Box
              xs={8}
              sm={10}
              display="block"
              mt={1}
              component="form"
              onSubmit={submitComment}
            >
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: purplishBluePale,
                    color: purplishBlueDark,
                    height: 20,
                  },
                }}
                size="small"
                fullWidth
                label="Write a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Box>
          </CardContent>

          <Box
            component="div"
            id="scrollBottom"
            sx={{
              overflowY: "scroll",
              height: "350px",
              "&:hover::-webkit-scrollbar": {
                display: "block",
              },
              "&::-webkit-scrollbar": {
                display: "block",
                width: "0.512rem",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: `inset 0 0 6px ${purplishBluePale}`,
                webkitBoxShadow: `inset 0 0 6px ${purplishBluePale}`,
                backgroundColor: purplishBluePale,
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: purplishBlue,
                borderRadius: "8px",
              },
            }}
          >
            {/* Display all comments session */}
            {item}
            <Box component="div" ref={scrollRef} />
          </Box>
        </>
      )}
    </Card>
  );
}
