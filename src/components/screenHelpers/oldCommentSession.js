<CardContent sx={{ py: "8px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={1.8} display="block" mt={1}>
            <CardMedia
              sx={{ height: 32, width: 32, float: "left" }}
              image="/images/avatar.jpg"
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural700,
                float: "right",
                pt: 0.5,
              }}
            >
              {currentUser}
            </Typography>
          </Grid>

          <Grid
            item
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
                },
              }}
              size="small"
              fullWidth
              label="Write a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>