import { ComponentStory, Meta } from '@storybook/react';
import Link from './link';

export default {
  component: Link,
  title: 'Theme/Link',
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#161b2f' },
      ],
    },
  },
} as Meta;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Go Back',
  href: 'http://www.bbc.co.uk',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Go Back',
  href: 'http://www.bbc.co.uk',
  variant: 'secondary',
};

export const Inverse = Template.bind({});
Inverse.args = {
  children: 'Go Back',
  href: 'http://www.bbc.co.uk',
  variant: 'inverse',
};
Inverse.parameters = {
  backgrounds: {
    default: 'Dark',
  },
};

export const NoDecoration = Template.bind({});
NoDecoration.args = {
  children: 'Go Back',
  decoration: false,
  href: 'http://www.bbc.co.uk',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Go Back',
  as: 'button',
};
