import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './radio';

export default {
  title: 'Theme/Forms/Radio',
  component: Radio,
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
    label: 'Male',
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

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
