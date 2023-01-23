import styled from 'styled-components';
import { Popup } from 'react-leaflet';
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { cH4, cH5 } from '../../config/styles/common-styles';

export const PropertiesMapContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
`;

    export const CustomMapContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const LocationSearchContainer = styled.div`
    position: absolute;
    display: flex;
    right: 1em;
    top: 1em;
    width: 30%;
    height: 6vh;
    z-index: 2;
`;

export const CustomPopUpComponent = styled(Popup)`
    margin: 5px;
    .leaflet-popup-content {
        margin: 10px !important;
    }
`;

export const CustomPopUpTitle = styled.h4`
    ${cH5}
    margin-bottom: 5px;
    font-weight: 550;
    color: #eb8d00;
`;

export const CustomLegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: white;
    margin: 10px;
    border-radius: 4px;
    padding: 10px;
`;

export const CustomLegendGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CustomLegendItemContainer = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    align-content: center;
    align-items: center;
    text-align: left;
`;

export const CustomLegendLabelContainer = styled.label`
    padding-left: 15px;
`;

export const CustomLegendGroupTitleContainer = styled.label`
    margin-top: 10px;
`;

export const AccidentIcon = styled(AiTwotoneCheckCircle)`
    width: 15px;
    height: 15px;
    fill: ${props => props.color}px;
`