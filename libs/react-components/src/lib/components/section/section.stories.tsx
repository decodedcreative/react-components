import { ComponentStory, Meta } from '@storybook/react';
import { Section } from './section';
import { Typography } from '../typography';

export default {
  component: Section,
  title: 'Theme/Section',
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

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>
    <Section.Item>
      <Typography as="h2" size="xxl">
        Section heading
      </Typography>
      <Typography marginBottom>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <Typography marginBottom>
        {' '}
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </Typography>
    </Section.Item>
  </Section>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
