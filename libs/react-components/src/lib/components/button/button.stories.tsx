import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './button';

export default {
  title: 'Theme/Button',
  component: Button,
  argTypes: {
    variant: {
      name: 'Button variant',
      description: 'Type of button',
      control: 'radio',
      options: ['secondary', 'primary'],
    },
    disabled: {
      name: 'Disabled',
      description: 'Disabled state of the button',
      control: 'radio',
      options: [true, false],
    },
  },
  args: {
    variant: 'secondary',
    disabled: false,
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button Text</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
