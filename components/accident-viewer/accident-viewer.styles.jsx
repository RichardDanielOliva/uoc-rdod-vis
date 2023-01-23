import styled from 'styled-components';
import { cH2, cH3 } from '../../config/styles/common-styles';
import Slider from '@mui/material/Slider';
import { styled as materialStyled } from '@mui/material/styles';

export const AccidentViewerContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 30vw;
  padding: 25px 20px;
  overflow-y: scroll;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;


export const DGContainer = styled.div`
  width: 80vw;
  height: 92vh;
`;

export const ChartContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ChartTitle = styled.h2`
  ${cH2};
  width: 100%;
  text-align:center;
  margin: 20px 0;
  color: #eb8d00;
`;

export const TabsContainer  = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormContainer  = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChartSubTitle = styled.h3`
  ${cH3};
  width: 100%;
  text-align:center;
  margin: 5px 0 20px 0;
`;

export const ChartDescription = styled.div`
  width: 100%;
  text-align:center;
`;

export const ChartContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ChartGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin-right: 30px;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
`;

export const LegendLabel = styled.div`
${cH3};
width: 100%;
white-space: nowrap;
font-size: 0.9em !important;
margin-right: 15px;
margin-bottom: 6px;
width: auto;

&.text-area {
  align-self: flex-start !important;
  margin-bottom: 5px;
  white-space: break-spaces;
}
&.checkout-form-input-label {
  color: black;
}
`;


export const LabelContainer = styled.div`
  color: white;
  background-color: #870124;
  box-shadow: black 0px 1px 4px;
  font-size: calc(0.75 * 12);
  width: 200px;
  padding: 0 0.2rem;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.lef}px;
`

export const AccidentMapContainer = styled.div`
  width: 70vw;
  height: 100vh;
`

export const CustomSlider = materialStyled(Slider)({
  //color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    top: '35%'
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    marginTop: -5,
    marginLeft: -6,
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',

    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
