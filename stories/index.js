import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

const RedBG = styled.div`
  width: 1em;
  height: 1em;
  background-color: red;
`

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ))
  .add('with some emoji and red bg', () => (
    <RedBG>😀 😎 👍 💯</RedBG>
  ))
;
