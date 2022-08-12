import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import labIcon from '../../../assets/icons/labIcon.svg'
import theme from '../../../theme'
import { labList1, labList2 } from '../../utils/Constant'
import IconwithText from '../IconwithText'
const box = {
  width: '100%',
  height: '22.25rem',
  backgroundColor: theme.palette.primary["800"],
}
const WhyChooseUs = () => {
  return (
    <Box sx={box}>
      <Grid container direction="column" rowGap="1.5rem" padding="4rem">
        <Grid item>
          <Typography color={theme.palette.gammaWhite.main} variant="h1">Why Choose Us</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" columnGap="1.5rem">
            {labList1.map((item: any, index: any) => {
              return (
                <Grid item>
                  <IconwithText icon={item.icon} text={item.text} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" columnGap="1.5rem">
            {labList2.map((item: any, index: any) => {
              return (
                <Grid item>
                  <IconwithText icon={item.icon} text={item.text} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhyChooseUs