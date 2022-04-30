import React from 'react'

import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { LinearProgress, Typography } from '@mui/material';
import { forecastSelector } from './forecastSlice';
import { useAppSelector } from '../../app/hooks';
  
const ForecastTable: React.FC = () => {
    const { forecasts, isLoading, isError, message } = useAppSelector(forecastSelector)

    /**
     * Format the time in month/day time format
     * 
     * @param params local time in iso format
     * @returns formatted time
     */
    function formatTime(params: any) {
      const dateTime = new Date(params.value)
      // Date.getMonth() is 0 indexed so add one to get the correct month
      return `${dateTime.getMonth()+1}\\${dateTime.getDate()} ${dateTime.getHours()}:00`
    }

    const columns: GridColDef[] = [
        { field: 'local_time_iso', headerName: 'Time', valueFormatter: formatTime, minWidth: 45},
        { field: 'temperature',  headerName: 'Temp', flex: 1},
        { field: 'relative_humidity',  headerName: 'Humidity', flex: 1},
        { field: 'heat_index',  headerName: 'Heat index', flex: 1},
        { field: 'visibility',  headerName: 'Visibility', flex: 1},
        { field: 'wind_gust',  headerName: 'Wind Gust', flex: 1},
        { field: 'wind_speed',  headerName: 'Wind Speed', flex: 1},
        { field: 'total_precipitation',  headerName: 'Precipitation', flex: 1},
        { field: 'rainfall_rate',  headerName: 'Rainfall Rate', flex: 1},
        { field: 'snowfall_rate',  headerName: 'Snowfall Rate', flex: 1}
      ];
      
    let rows: GridRowsProp = forecasts;

    return (
      <div style={{ height: 500 }}>
        <Typography variant="h5" component="div">
            Forecasts
        </Typography>
        {isLoading && <LinearProgress />}
        {isError && <p>{message}</p>}
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            {forecasts?.length > 0 && <DataGrid
              rows={rows}
              getRowId={row => row.time}
              columns={columns}
              pageSize={12}
              rowsPerPageOptions={[12]}
            />}
          </div>
        </div>
      </div>
    )
}

export default ForecastTable