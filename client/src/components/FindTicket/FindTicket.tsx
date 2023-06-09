import { FlightLand, FlightTakeoff } from '@mui/icons-material'
import { Box, Button, Card, InputAdornment, TextField } from '@mui/material'
import { FunctionComponent } from 'react'
import dayjs from 'dayjs'
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExplore'

interface FindTicketProps {}

const FindTicket: FunctionComponent<FindTicketProps> = () => {
  return (
    <>
      <Card>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              sx={{
                display: 'flex',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
              }}
            >
              <TextField
                id="input-departure"
                label="Departure"
                defaultValue={'Ho Chi Minh'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightTakeoff
                        sx={{
                          color: 'action.active',
                          mr: 1,
                          fontSize: 40,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ minWidth: 200 }}
              />
              <Box marginTop={1}>
                <DatePicker
                  defaultValue={dayjs(' ' + new Date())}
                  format="DD-MM-YYYY"
                  sx={{ minWidth: 200 }}
                />
              </Box>

              <TextField
                id="input-arrival"
                label="Arrival"
                defaultValue={'Ha Noi'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightLand
                        sx={{
                          color: 'action.active',
                          mr: 1,
                          fontSize: 40,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ minWidth: 200 }}
              />

              <Box marginTop={1}>
                <DesktopDatePicker
                  defaultValue={dayjs(' ' + new Date())}
                  format="DD-MM-YYYY"
                  sx={{ minWidth: 200 }}
                />
              </Box>

              <Button
                variant="contained"
                sx={{ maxHeight: 40, minWidth: 100, fontWeight: 600 }}
              >
                <TravelExploreOutlinedIcon
                  sx={{
                    color: '#ffffff',
                    mr: 1,
                  }}
                />
                Search
              </Button>
            </Box>
          </LocalizationProvider>
        </Box>
      </Card>
    </>
  )
}

export default FindTicket
