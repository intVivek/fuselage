import React from 'react';

import { InputBox } from '../InputBox';

export const TextInput = React.forwardRef(function TextInput(props, ref) {
  return <InputBox is='input' ref={ref} type='text' {...props} />;
});

TextInput.displayName = 'TextInput';
