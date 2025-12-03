# Component Library - Vite + React + CSS Modules

Biblioteca de componentes React construída com Vite, CSS Modules e Storybook.

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **CSS Modules** - Estilos isolados por componente
- **Storybook 8** - Documentação e desenvolvimento de componentes
- **SWC** - Transpilação ultra-rápida

## 📦 Instalação

```bash
npm install
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento - Inicia o Storybook
npm run dev
npm run storybook

# Build - Gera o bundle da biblioteca
npm run build

# Build Storybook - Gera versão estática do Storybook
npm run build-storybook
```

## 📖 Uso da Biblioteca

Após o build, a biblioteca gera:
- `dist/index.js` - Módulo ES
- `dist/index.cjs` - CommonJS
- `dist/style.css` - Estilos compilados
- `dist/index.d.ts` - Definições TypeScript

### Instalando em outro projeto

```bash
npm install @pyymenta/component-library
```

### Importando componentes

```tsx
import { Button, Card } from '@pyymenta/component-library';
import '@pyymenta/component-library/styles';

function App() {
  return (
    <Card title="Meu Card">
      <Button variant="primary" onClick={() => alert('Clicou!')}>
        Clique aqui
      </Button>
    </Card>
  );
}
```

## 🎨 Componentes Disponíveis

### Button
Botão com variantes (primary, secondary, outline) e tamanhos (small, medium, large).

### Card
Card para organizar conteúdo com variantes (default, elevated, outlined).

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   └── Card/
│       ├── Card.tsx
│       ├── Card.module.css
│       ├── Card.stories.tsx
│       └── index.ts
└── index.ts
```

## 📝 Adicionando Novos Componentes

1. Crie uma pasta em `src/components/NomeDoComponente/`
2. Adicione os arquivos:
   - `NomeDoComponente.tsx` (componente)
   - `NomeDoComponente.module.css` (estilos)
   - `NomeDoComponente.stories.tsx` (documentação Storybook)
   - `index.ts` (exports)
3. Exporte o componente em `src/index.ts`

## 📄 Licença

MIT
