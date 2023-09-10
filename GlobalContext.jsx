import React, {createContext, useContext, useReducer, useRef} from 'react';
import Backgrounds from './src/Backgrounds';

const Context = createContext();
const EditorRef = createContext();
const PreviewRef = createContext();

export function useGlobalContext() {
  return useContext(Context);
}

export function useEditorRef() {
  return useContext(EditorRef);
}

export function usePreviewRef() {
  return useContext(PreviewRef);
}

export default function ContextProvider({children}) {
  const initialState = {
    activeTab: 'radius',
    title: 'Corner Radius',
    radius: 0,
    padding: 0.05,
    shadow: 0,
    background: Backgrounds[0],
    image: null,
    imageRatio: 0,
    aspectRatio: 1,
    imageWidth: 0,
    imageHeight: 0,
  };
  const editorRef = useRef(null);
  const previewRef = useRef(null);

  function reducer(state, {type, payload}) {
    switch (type) {
      case 'TAB':
        console.log(payload);
        return {
          ...state,
          activeTab: payload.tab,
          title: payload.title,
        };
      case 'RADIUS':
        return {
          ...state,
          radius: payload.radius,
        };
      case 'PADDING':
        return {
          ...state,
          padding: payload.padding,
        };
      case 'SHADOW':
        return {
          ...state,
          shadow: payload.shadow,
        };
      case 'BACKGROUND':
        return {
          ...state,
          background: payload.background,
        };
      case 'IMAGE':
        console.log('imageRatio:', payload.imageRatio);
        return {
          ...state,
          image: payload.image,
          imageRatio: payload.imageRatio,
          imageWidth: payload.imageWidth,
          imageHeight: payload.imageHeight,
        };
      case 'ASPECT_RATIO':
        return {
          ...state,
          aspectRatio: payload.aspectRatio,
        };
      default:
        return state;
    }
  }

  const contextReducer = useReducer(reducer, initialState);

  return (
    <Context.Provider value={contextReducer}>
      <EditorRef.Provider value={editorRef}>
        <PreviewRef.Provider value={previewRef}>{children}</PreviewRef.Provider>
      </EditorRef.Provider>
    </Context.Provider>
  );
}
