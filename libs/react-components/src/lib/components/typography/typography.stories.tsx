import { ComponentStory, Meta } from '@storybook/react';
import Typography from './typography';

export default {
  component: Typography,
  title: 'Theme/Typography',
} as Meta;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

const MultiLineTemplate: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography {...args} />
    <Typography {...args} />
  </>
);

export const Italic = Template.bind({});
Italic.args = {
  children: 'Some text here',
  italic: true,
};

export const MarginBottom = MultiLineTemplate.bind({});
MarginBottom.args = {
  children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  marginBottom: true,
};
