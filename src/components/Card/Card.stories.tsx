import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Padrão',
    variant: 'default',
    children: 'Este é um card com a variante padrão. Perfeito para exibir conteúdo de forma organizada.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Card Elevado',
    variant: 'elevated',
    children: 'Este card possui sombra elevada, dando destaque ao conteúdo.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Card com Borda',
    variant: 'outlined',
    children: 'Card com borda destacada e fundo colorido.',
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'default',
    children: 'Um card sem título, apenas com conteúdo.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Card Clicável',
    variant: 'elevated',
    children: 'Clique neste card para ver a interação!',
    onClick: () => alert('Card clicado!'),
  },
};

export const WithComplexContent: Story = {
  args: {
    title: 'Card com Conteúdo Rico',
    variant: 'default',
    children: (
      <div>
        <p>Este card pode conter qualquer tipo de conteúdo React.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
  },
};
