import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';

export default {
  title: 'Theme/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#161b2f' },
      ],
    },
  },
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Submit</Button>
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

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  as: 'a',
  href: 'http://www.bbc.co.uk',
};
