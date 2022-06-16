import React, { useEffect, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import SwitchButton from "../Switch";

function Classic() {
  const [strEnCode, setStrEnCode] = React.useState("");
  const [switchBtn, setSwitchBtn] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [value, setValue] = useState("");

  const [k, setK] = React.useState(0);
  let arrNew = [];

  useEffect(() => {
    const handleEnCode = (value) => {
      arrNew = value.toUpperCase().split("");

      let str = "";
      let kq = [];
      for (let i = 0; i < arrNew.length; i++) {
        if (isChecked) {
          str = String.fromCharCode(
            arrNew[i].charCodeAt(0) + (k < 26 ? k : k % 26) <= 90
              ? arrNew[i].charCodeAt(0) + (k % 26)
              : arrNew[i].charCodeAt(0) + (k % 26) - 26
          );
          kq.push(str);
        } else {
          str = String.fromCharCode(
            arrNew[i].charCodeAt(0) - (k < 26 ? k : k % 26) < 65
              ? arrNew[i].charCodeAt(0) - (k % 26) + 26
              : arrNew[i].charCodeAt(0) - (k % 26)
          );

          kq.push(str);
        }
      }
      setStrEnCode(kq.join(""));
    };
    handleEnCode(value);
  }, [value, isChecked, k]);

  const handleChangeSwitch = () => {
    setSwitchBtn(!switchBtn);
    setIsChecked(!isChecked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: { xs: "20px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            display: "inline-block",
            textAlign: { xs: "center" },
          }}
          variant="h6"
        >
          Mã hóa cổ điển
        </Typography>
        <SwitchButton
          isChecked={isChecked}
          onChangeSwitch={() => handleChangeSwitch()}
        />
        <TextField
          onChange={(e) => setK(Number(e.target.value))}
          size="small"
          label="Chỉ số"
          type="number"
          id="fullWidth"
          sx={{ width: "80px", textAlign: "center" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "8px",
          my: "20px",
          width: "100%",
          flexWrap: { md: "noWrap", xs: "wrap" },
        }}
      >
        <TextField
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          label="Mã ban đầu"
          id="fullWidth"
          sx={{ mb: { xs: "8px" } }}
        />
        <TextField disabled value={strEnCode} fullWidth id="fullWidth" />
      </Box>
    </Box>
  );
}

export default Classic;
