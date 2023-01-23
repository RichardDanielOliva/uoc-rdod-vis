import React from 'react';
import { connect } from 'react-redux';
import { selectMapData, selectNumberHouseData } from '../../../redux/data/data.selectors';
import CustomMap from '../../custom-map/custom-map.component';

import {
  AccidentMapContainer
} from '../accident-viewer.styles';

const AccidentMap = ({ data, numberHouseData, populationData, baseLayer, contentLayer, additionalLayer }) => { 
  return (
    <AccidentMapContainer>
      <CustomMap 
        data={data}
        numberHouseData={numberHouseData}
        populationData={populationData}
        baseLayer={baseLayer}
        contentLayer={contentLayer}
        additionalLayer={additionalLayer}
        latitude={49.200}
        logitude={16.600}
      />
    </AccidentMapContainer>
  );
};

const mapStateToProps = state => ({
  data: selectMapData(state),
  numberHouseData: selectNumberHouseData(state),
  contentLayer: state.data.contentLayer,
  baseLayer: state.data.baseLayer,
  additionalLayer: state.data.additionalLayer,
  populationData: state.data.populationData
});

export const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AccidentMap);
