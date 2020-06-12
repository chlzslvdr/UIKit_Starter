import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import '../scss/main.scss';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button onClick={action('clicked')}>Hello Button Test</Button>
);
