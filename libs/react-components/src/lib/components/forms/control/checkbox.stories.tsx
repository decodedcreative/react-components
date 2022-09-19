import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Control } from './control';

export default {
  title: 'Theme/Forms/Checkbox',
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

const Checkbox: ComponentStory<typeof Control> = (args) => (
  <Control {...args}>
    <Control.Input type="checkbox" id="marketing" name="marketing" />
    <Control.Label>
      Would you like to sign up to our mailing list?
    </Control.Label>
  </Control>
);

export const Default = Checkbox.bind({});
Default.args = {};

export const Disabled = Checkbox.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Checkbox.bind({});
Error.args = {
  error: true,
};
