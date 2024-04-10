import React from 'react';

export interface SlideArray {
  id: string;
  title: string;
  description: string;
  image: React.JSX.Element;
}

export interface Slides {
  id: string;
  image: React.JSX.Element;
}

export interface Props {
  onDone: () => void;
  onSkip: () => void;
}
