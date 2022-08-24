import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../../components/atoms/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ProgressBar from '../../components/molecules/progressBar'
import Logo from '../../components/molecules/logo'
import logo from '../../assets/icons/logo.svg'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'
import SelectAddress from '../../components/organisms/SelectAddress'
import {  addressDetailsType, ADDRESS_PAGE_BAR_VALUES } from '../../utils/constant'
import { getAddressDetails } from '../../services/services'

const SelectAddressPage = () => {
  let userId=1;
  const navigate = useNavigate()
  const handleClickonLogo = () => {
    navigate('/homePage')
  }
  const handleClickonBackButton = () => {
    navigate('/AddAddressPage')
  }
  const hanldeOnAddAddress = () => {
    navigate('/AddAddressPage')
  }
  const handleCompleteOrder = (selectedAddress:addressDetailsType) => {
    localStorage.setItem("selectedAddress",JSON.stringify(selectedAddress))
    navigate('/reviewOrderPage')
  }
  const [data,setData]=useState<any>([])
  useEffect(() => {
   getAddressDetails(userId).then((res)=>{
      setData(res)
   })
  }, [])
  return (
    <Box marginY={6} marginX={10}>
      <Box onClick={handleClickonLogo}>
        <Logo img={logo} text="Zemoso Diagnostics" />
      </Box>
      <Grid
        container
        direction="row"
        columnGap="490px"
        alignItems="center"
        paddingTop="2.5rem"
      >
        <Grid item>
          <Button
            onClick={handleClickonBackButton}
            variant="text"
            startIcon={<ArrowBackIcon />}
            children={<Typography variant="body">Back</Typography>}
          />
        </Grid>
        <Grid xs  item>
            <Box width="671px">
            <ProgressBar
              values={ ADDRESS_PAGE_BAR_VALUES}
              currentIndex={2}
            />
            </Box>
        </Grid>
      </Grid>
      
      <Box display="flex" paddingTop="2rem" justifyContent="center">
  <SelectAddress addressData={data} onAddAddressClick={hanldeOnAddAddress} onCompleteClick={(selectedAddress:addressDetailsType)=>handleCompleteOrder(selectedAddress)}/>
      </Box>
    </Box>
  )
}

export default SelectAddressPage