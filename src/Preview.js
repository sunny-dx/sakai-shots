import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {viewportHeight, viewportWidth} from '../constants';
import {useGlobalContext, usePreviewRef} from '../GlobalContext';
import ImagePicker from './ImagePicker';
const Preview = ({scale, exportable}) => {
  const [state, dispatch] = useGlobalContext();
  const previewRef = usePreviewRef();
  return (
    <View
      style={{
        height: viewportHeight * scale - 200,
        width: viewportWidth * scale,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <View
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          borderWidth: 2,
          borderColor: 'rgba(255, 255, 255, 0.1)',
        }}>
        <View
          style={{
            width: viewportWidth * scale - 30,
            minHeight: 100,
            backgroundColor: 'grey',
            aspectRatio: state.aspectRatio,
            padding: state.padding * 50 * scale,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          {...(exportable ? {ref: previewRef} : {})}>
          <state.background width={viewportWidth * scale} />
          <ImagePicker scale={scale} />
        </View>
      </View>
    </View>
  );
};

export default Preview;
