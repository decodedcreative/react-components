import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './textfield';

export default {
  title: 'Theme/Forms/TextField',
  component: TextField,
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
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  'aria-invalid': true,
  defaultValue: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  defaultValue: 'Disabled',
};
