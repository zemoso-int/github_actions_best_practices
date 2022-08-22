import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import LabDetailsCard from '../../molecules/labDetailsCard'
import { SELECT_LAB, SORT } from '../../utils/Constant'
import theme from '../../../theme'
import SortImg from '../../../assets/icons/Sort.svg'
type Props = {
  id: number
  labIcon: string
  labName: string
  time: string
  cost: string
  selected?: boolean
  onClick?: (labid: number) => void
  rating: string
  slots: number
}
type TestProps = {
  tests: Props[]
}

const SelectLabMainContent: React.FC<TestProps> = (props) => {
  const useStyles = makeStyles({
    heading: {
      fontWeight: '600',
      color: theme.palette.gammaHigh.main,
    },
    img: {
      width: '12.01px',
      height: '16px',
      color: theme.palette.grey[300],
      float: 'right',
    },
    sort: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  })

  const classes = useStyles()
  const [select, setSelect] = useState(1)
  const handleClick = async (labId: number) => {
    setSelect(labId)
  }
  return (
    <>
      <Grid container spacing={4}>
        <Grid item container>
          <Grid item xs={11}>
            <Typography variant="body" className={classes.heading}>
              {SELECT_LAB}
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.sort}>
            <img src={SortImg} alt="sort" className={classes.img} />

            <Typography
              variant="caption2"
              color={theme.palette.gammaMedium.main}
            >
              {SORT}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container spacing={6}>
          {props.tests.map((test) => {
            return (
              <Grid item xs={12} key={test.id}>
                <LabDetailsCard
                  id={test.id}
                  labIcon={test.labIcon}
                  labName={test.labName}
                  time={test.time}
                  cost={test.cost}
                  selected={select === test.id ? true : false}
                  rating={test.rating}
                  slots={test.slots}
                  onClick={handleClick}
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default SelectLabMainContent