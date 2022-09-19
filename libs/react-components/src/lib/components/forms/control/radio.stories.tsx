import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Control } from './control';

export default {
  title: 'Theme/Forms/Radio',
  component: Control,
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#161b2f' },
      ],
    },
  },
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Control>;

const Radio: ComponentStory<typeof Control> = (args) => (
  <Control {...args}>
    <Control.Input type="radio" id="male" name="gender" checked />
    <Control.Label>Male</Control.Label>
  </Control>
);

export const Default = Radio.bind({});
Default.args = {};

export const Disabled = Radio.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Radio.bind({});
Error.args = {
  error: true,
};
