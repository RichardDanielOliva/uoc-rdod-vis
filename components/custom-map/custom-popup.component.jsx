import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Pane} from 'react-leaflet';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CustomPopUpComponent, CustomPopUpTitle } from './custom-map.styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '5px 10px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomPopUp = ({ attributes,
  attributesToDisplay = ['id', 'datum', 'day_of_the_week', 'genders', 'age_group', 'consequence', 'carriage_status', 'Visibility'],
  attributesLabels = ['id', 'datum', 'Día de la semana', 'Género', 'Grupo de edad', 'Consecuencia', 'Estado de la via', 'Visibilidad']
}) => { 
  return (
    <Pane style={{ zIndex: 510 }}>
    <CustomPopUpComponent closeButton={false}>
      <CustomPopUpTitle>Detalles:</CustomPopUpTitle>

    <TableContainer component={Paper}>
    <Table size="small" aria-label="customized table">
      <TableBody>
        {
          attributesToDisplay.map((key, index) => (
            <StyledTableRow key={`custom-popup-prop-${key}`}>
              <StyledTableCell align="right">{attributesLabels[index]}</StyledTableCell>
              <StyledTableCell align="right">{attributes[key]}</StyledTableCell>
            </StyledTableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  </CustomPopUpComponent>
  </Pane>
  );
};

export default CustomPopUp;
