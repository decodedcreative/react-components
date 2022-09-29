import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  title: 'Theme/Forms/Checkbox',
  component: Checkbox,
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
  args: {
    label: 'Would you like to sign up to our mailing list?',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: true,
};

export const Error = Template.bind({});
Error.args = {
  'aria-invalid': true,
  checked: true,
};
