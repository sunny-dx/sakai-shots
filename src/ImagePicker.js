import React, {useState, useEffect} from 'react';
import {Image, Platform, TouchableOpacity, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useGlobalContext} from '../GlobalContext';

const MediaPicker = () =>
  new Promise(res => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      res,
    );
  });

const Picker = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
        }}>
        Click here to add your image
      </Text>
    </TouchableOpacity>
  );
};

const getSize = url =>
  new Promise(resolve => {
    Image.getSize(url, (width, height) =>
      resolve({
        width,
        height,
      }),
    );
  });

export default function ImagePicker({scale}) {
  const [state, dispatch] = useGlobalContext();
  const pickImage = async () => {
    let result = await MediaPicker();
    if (!result.didCancel) {
      let {
        uri: image,
        width: imageWidth,
        height: imageHeight,
      } = result.assets[0];
      dispatch({
        type: 'IMAGE',
        payload: {
          image,
          imageRatio: imageWidth / imageHeight,
          imageWidth,
          imageHeight,
        },
      });
    }
  };

  const imagefit =
    state.imageRatio <= 1 && state.imageRatio <= state.aspectRatio
      ? {
          height: '100%',
        }
      : {
          width: '100%',
        };

  return (
    <TouchableOpacity
      style={[
        {
          elevation: state.shadow * 40,
          borderRadius: state.radius * 50 * scale,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.7,
          shadowRadius: state.shadow * 40,
        },
        ...Platform.select({
          web: (() => {
            const style = {};
            if (state.imageWidth > state.imageHeight) {
              style.width = '-webkit-fill-available';
            } else if (state.imageHeight && state.imageWidth) {
              style.height = '-webkit-fill-available';
            }
            return [style];
          })(),
          android: [],
        }),
      ]}
      onPress={pickImage}>
      {state.image ? (
        <Image
          source={{
            uri: state.image,
          }}
          style={{
            aspectRatio: state.imageRatio,
            borderRadius: state.radius * 50 * scale,
            ...imagefit,
          }}
          resizeMode="contain"
        />
      ) : (
        <Picker onPress={pickImage} />
      )}
    </TouchableOpacity>
  );
}
