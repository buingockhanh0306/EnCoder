import React, { useEffect, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

function Classic() {
    const [bitValue, setBitValue] = useState('')
    const [decimalValue, setDecimalValue] = useState()
    const [row, setRow] = useState(0)
    const [column, setColumn] = useState(0)
    const [validation, setValidation] = useState(false)
    const valueRegex = /^[0-1]{6}$/

    const handleChangeValue = (value)=>{
        if(valueRegex.test(value)){
            setBitValue(value)
            setValidation(true)
        }
        else{
            setValidation(false)
        }
    }

    const handleChangeDecimal = (value)=>{
        setDecimalValue(value)
    }

    useEffect(()=>{
        const str = bitValue.split('')
        setRow(parseInt( str[0]+str[5], 2));
        setColumn(parseInt(str[1]+str[2]+str[3]+str[4],2))
    },[validation])


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
          width: "100%",
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
          Mã hóa...
        </Typography>
          <Box sx={{display: 'flex',
              justifyContent:'space-between',
              alignItems: 'center', marginTop: '20px',
              flexDirection: { md: "row", xs: "column" }}}
          >
              <TextField
                  type={'number'}
                  onChange={(e)=>handleChangeValue(e.target.value)}
                  placeholder={'Mã ban đầu'}
                  sx={{width: {xs: '100%', md: 'auto'}}}
              />
              {validation ? <Typography
                  sx={{
                      fontSize: "20px",
                      display: "inline-block",
                      textAlign: {xs: "center"},
                      marginTop: '12px'
                  }}
              >
                  {`Hàng ${row}, cột ${column}`}
              </Typography>: ''}
          </Box>

          <Box sx={{marginTop: '20px',
                  display: 'flex',
                  justifyContent:'space-between',
                  alignItems: 'center',
                  flexDirection: { md: "row", xs: "column" }}}>
              {validation ?
              <TextField
                  type={'number'}
                  onChange={(e) => handleChangeDecimal(e.target.value)}
                  placeholder={'Số đã tìm thấy'}
                  sx={{width: {xs: '100%', md: 'auto'}}}
              />:''}
              {decimalValue ? <Typography
                  sx={{
                      fontSize: "20px",
                      display: "inline-block",
                      textAlign: {xs: "center"},
                      marginTop: '12px'
                  }}
              >
                  {`Kết quả: ${Number(decimalValue).toString(2)}`}
              </Typography>: ''}

          </Box>
      </Box>
    </Box>
  );
}

export default Classic;
