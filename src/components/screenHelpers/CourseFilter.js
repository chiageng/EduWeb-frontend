import React from "react";
import {
  Typography,
  Divider,
  CardContent,
  Card,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { fontType } from "../../design/font";
import { neural900 } from "../../design/color";

export default function CourseFilter({ }) {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        mb: "16px",
        width: "100%",
      }}
    >
      <CardContent>
        <Box mb={2}>
          <Typography
            color={neural900}
            fontSize="18px"
            fontWeight={600}
            fontFamily={fontType}
            component="div"
          >
            Category
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox size="small"/>}
              label="Primary"
              value="Primary"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Secondary"
              value="Secondary"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Upper Level"
              value="Upper Level"
              onChange={(e) => console.log(e.target.value)}
            />
          </FormGroup>
        </Box>

        <Divider flexItem />

        <Box mb={2} mt={2} >
          <Typography
            color={neural900}
            fontSize="18px"
            fontWeight={600}
            fontFamily={fontType}
            component="div"
          >
            Topic
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox size="small"/>}
              label="Science"
              value="Science"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Maths"
              value="Maths"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Chinese"
              value="Chinese"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="English"
              value="English"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Malay"
              value="Malay"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="History"
              value="History"
              onChange={(e) => console.log(e.target.value)}
            />
          </FormGroup>
        </Box>
      </CardContent>
    </Card>
  );
}
