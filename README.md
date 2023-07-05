# Waveclass Design System (WDS) - Core

Este repositório pertence à organização Wavetex e tem o objetivo de reunir os componentes padronizados da grade de estilos da plataforma Waveclass para Web.

## Sumário

-   [Tecnologias utilizadas](#tecnologias-utilizadas)
-   [Storybook](#storybook)
-   [Instalação](#instalação)
-   [Utilitários](#utilitários)
-   [Componentes](#componentes)
    -   [Avatar](#avatar)
    -   [Course Banner](#course-banner)
    -   [Filter Button](#filter-button)
    -   [Floating Button](#floating-button)
    -   [Grid Item](#grid-item)
    -   [Input](#input)
    -   [Lecture Card](#lecture-card)
    -   [Number Badge](#number-badge)
    -   [Option Button](#option-button)
    -   [Pill](#pill)
    -   [Regular Button](#regular-button)
    -   [Search Input](#search-input)
    -   [Typography](#typography)

## Tecnologias utilizadas

-   [React 18](https://react.dev/reference/react);
-   [Typescript](https://www.typescriptlang.org/);
-   [Styled Components](https://styled-components.com/);
-   [React Icons](https://react-icons.github.io/react-icons/);
-   [Storybook](https://storybook.js.org/);
-   [PNPM](https://pnpm.io/pt/).

## Storybook

Este repositório faz uso do Storybook para demonstração dos componentes visuais da WDS. Para utilizá-lo, clone o repositório localmente em sua máquina e execute os seguintes comandos:

    pnpm i

_É fortemente recomendado o uso do PNPM para execução de scripts de instalação neste repositório._

    pnpm sb

_Este comando iniciará o Storybook e deve automaticamente abrir uma aba no seu browser padrão com a página inicial do Storybook. Caso isso não ocorra, basta acessar http://localhost:6006/._

Agora você pode visualizar os componentes da WDS e brincar com suas variações!

## Instalação

Para utilizar a Waveclass Design System no seu projeto (seja no repo principal da Waveclass ou em algum projeto à parte), basta executar o comando:

    pnpm i --save @waveclass/wds-core

A WDS assume que o seu projeto possua as dependências necessárias para o funcionamento, são elas:

-   React ^18.2.0;
-   React DOM ^18.2.0;
-   React Icons ^4.9.0;
-   Styled Components 6.0.0-rc.3.

Certifique-se de tê-las instaladas e nas versões mínimas necessárias antes de iniciar o uso da WDS.

## Utilitários

### getSchoolColors

Esta _utility function_ retorna um objeto com as cores personalizadas da escola atualmente logada no _browser_.

    import { getSchoolColors } from '@waveclass/wds-core';

    const schoolColors = getSchoolColors();

**Dados retornados**
| Nome | Tipo | Descrição |
|--|--|--|
| primaryColor | `string` | Cor primária |
| secondaryColor | `string` | Cor secundária |
| buttonColor | `string` | Cor de botão |
| secondaryLogo | `string` | URL da logo secundária (ícone) |

### getThemeMode

Esta _utility function_ retorna um a preferência de tema atual do usuário.

    import { getThemeMode } from '@waveclass/wds-core';

    const themeMode = getThemeMode(); /* light | dark */

### isColorDark

Esta _utility function_ indica se determinada cor é escura. Use-a para estilizações em que será necessário alterar alguma cor dependendo das cores personalizadas da escola.

    import { isColorDark, getSchoolColors } from '@waveclass/wds-core';

    const { primaryColor } = getSchoolColors(); /* assuming primaryColor resolves to #000000 */
    const isPrimaryColorDark = isColorDark(primaryColor); /* true */
    const myTextColor = isPrimaryColorDark ? '#FFF' : '#000';

### theme

Esta _utility function_ retorna um objeto com os dados completos do tema da Waveclass Design System.

    import { theme } from '@waveclass/wds-core';

Por gentileza, a fim de reduzir o tamanho desta documentação, cheque a tipagem deste objeto em:

    src -> theme.ts

## Componentes

### Avatar

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| size | `string` | Tamanho: 'sm', 'md', 'lg' e 'xl' | Sim |
| name | `string` | Nome do usuário | Sim |
| img | `string` | URL da foto | Não |
| online | `boolean` | Se deve exibir _badge_ de online | Não |

**Exemplo de uso**

    import { Avatar } from '@waveclass/wds-core';

    const MyComponent = () => {
        return (
    	    <Avatar size='sm' name='Fulano da Silva' />
        );
    };
    
  
### Course Banner

**Props**

| Nome           | Tipo     | Descrição     | Obrigatório |
| -------------- | -------- | ------------- | ----------- |
| courseName     | `string` | Nome do curso | Sim         |
| bannerImageUrl | `string` | URL do Banner | Sim         |
| courseId | `string` | ID do curso | Sim         |
| onClick | `(courseId: string) => void` | _Handler_ de clique | Sim |

**Exemplo de uso**

```
import { CourseBanner } from "@waveclass/wds-core";

const MyComponent = () => {
  return (
    <CourseBanner
      courseName="Nome do curso"
      bannerImageUrl="url-do-banner"
    />
  );
};
```
  

### Filter Button

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| onClick | `function => void` | _Handler_ de clique | Sim |
| disabled | `boolean` | Se o botão está desabilitado | Não |
| text | `string` | Texto do botão | Sim |
| icon | `ReactNode` | Ícone do botão | Não |
| customStyles | `CSSProperties` | Estilos customizados | Não |

**Exemplo de uso**

    import { FilterButton } from '@waveclass/wds-core';

    const MyComponent = () => {
        return (
    	    <FilterButton text='Click Me' onClick={() => alert('I was clicked!')} />
        );
    };

### Floating Button

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| onClick | `function => void` | _Handler_ de clique | Sim |
| disabled | `boolean` | Se o botão está desabilitado | Não |
| variant | `string` | Variante de estilo: 'primary' ou 'secondary' | Sim |
| icon | `ReactNode` | Ícone do botão | Não |
| customStyles | `CSSProperties` | Estilos customizados | Não |

**Exemplo de uso**

    import { FloatingButton } from '@waveclass/wds-core';

    const MyComponent = () => {
        return (
    	    <FloatingButton onClick={() => alert('I was clicked!')} variant='primary' />
        );
    };
    
    
### Grid Item

**Props**

| Nome         | Tipo            | Descrição                                   | Obrigatório |
| ------------ | --------------- | ------------------------------------------- | ----------- |
| id           | `string`        | Identificador do elemento                   | Não         |
| variant      | `string`        | Variante de tamanho                         | Sim         |
| customStyles | `CSSProperties` | Propriedades CSS customizadas               | Não         |
| children     | `ReactNode`     | Conteúdo a ser exibido dentro do componente | Sim         |

**Exemplo de uso**

```
import { GridItem } from "@waveclass/wds-core";

const MyComponent = () => {
  return (
    <GridItem
      id="0"
      variant="row"
      customStyles={{
        background: red;
      }}
      children="Texto"
    />
  );
};
```

### Input

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| onChange | `function => void` | _Handler_ de evento de mudança | Sim |
| value | `string, number` | Valor do input | Sim |
| disabled | `boolean` | Se o botão está desabilitado | Não |
| required | `boolean` | Se é de preenchimento obrigatório | Não |
| max | `number` | Valor máximo | Não |
| min | `number` | Valor mínimo | Não |
| maxLength | `number` | Tamanho máximo | Não |
| minLength | `number` | Tamanho mínimo | Não |
| placeholder | `string` | _Placeholder_ | Não |
| type | `string` | Tipo do input | Não |
| showError | `boolean` | Se deve exibir _helper text_ de erro | Não |
| errorMessage | `string` | Mensagem do _helper text_ de erro | Não |
| icon | `ReactNode` | Ícone do input | Não |
| hideDefaultIcon | `boolean` | Se deve ocultar ícone padrão (baseado no type) | Não |

**Exemplo de uso**

    import { Input } from '@waveclass/wds-core';
    import { useState } from 'react';

    const MyComponent = () => {
        const [name, setName] = useState('');

        return (
    	    <Input value={name} onChange={e => setName(e.target.value)} />
        );
    };
    
    
### Lecture Card

**Props**

| Nome        | Tipo     | Descrição                        | Obrigatório |
| ----------- | -------- | -------------------------------- | ----------- |
| type | `string` | Tipo de aula (Vídeo, Áudio, etc) | Sim         |
| name       | `string` | Título da aula                   | Sim         |
| thumbnail   | `string` | URL da thumbnail da aula         | Sim         |
| teacher      | `string` | Professor da aula                    | Sim         |
| duration    | `number` | Duração da aula, em segundos     | Sim         |
| finished    | `boolean` | Se o aluno terminou a aula     | Não         |
| progress    | `number` | O quanto da aula já foi completada     | Não         |
| onClick    | `() => void` | _Handler_ de clique    | Sim         |
| avaliable    | `boolean` | Se a aula está disponível     | Sim         |
| favorite    | `boolean` | Se a aula foi favoritada    | Não         |



**Exemplo de uso**

```
import { LectureCard } from "@waveclass/wds-core";

const MyComponent = () => {
  return (
    <LectureCard
      lectureType="video"
      title="Título"
      thumbnail="url-da-imagem"
      author="Nome do autor"
      duration=605
      pillVariant="success"
      pillText="Texto"
    />
  );
};
```


### Number Badge

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| value | `number` | Número a ser exibido | Sim |

**Exemplo de uso**

    import { NumberBadge } from '@waveclass/wds-core';

    const MyComponent = () => {
        return (
    	    <NumberBadge value={5} />
        );
    };
   

### Option Button

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| onClick | `function => void` | _Handler_ de clique | Sim |
| disabled | `boolean` | Se o botão está desabilitado | Não |
| text | `string` | Texto do botão | Sim |
| icon | `ReactNode` | Ícone do botão | Não |
| customStyles | `CSSProperties` | Estilos customizados | Não |

**Exemplo de uso**

    import { OptionButton } from '@waveclass/wds-core';

    const MyComponent = () => {
        return (
    	    <OptionButton onClick={() => alert('I was clicked!')} text='Click me' />
        );
    };


### Pill

**Props**

| Nome    | Tipo     | Descrição                        | Obrigatório |
| ------- | -------- | -------------------------------- | ----------- |
| text    | `string` | Texto a ser exibido              | Sim         |
| variant | `string` | Variante de cor de fundo e borda | Sim         |

**Exemplo de uso**

```
import { Pill } from "@waveclass/wds-core";

const MyComponent = () => {
  return (
  	<Pill variant="success" text="Texto"/>
  );
};
```


### Regular Button

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| onClick | `function => void` | _Handler_ de clique | Sim |
| disabled | `boolean` | Se o botão está desabilitado | Não |
| type | `string` | Tipo do botão: 'button', 'submit' ou 'reset' | Não |
| text | `string` | Texto do botão | Sim |
| variant | `string` | Variante de estilo: vide **Storybook** | Sim |
| icon | `ReactNode` | Ícone do botão | Não |
| customStyles | `CSSProperties` | Estilos customizados | Não |

**Exemplo de uso**

    import { RegularButton } from '@waveclass/wds-core';

    const MyComponent = () => {
        return (
    	    <RegularButton onClick={() => alert('I was clicked!')} text='Click me' variant='primary-contained' />
        );
    };
    

### Search Input

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| onChange | `function => void` | _Handler_ de evento de mudança | Sim |
| value | `string, number` | Valor do input | Sim |
| disabled | `boolean` | Se o botão está desabilitado | Não |
| required | `boolean` | Se é de preenchimento obrigatório | Não |
| max | `number` | Valor máximo | Não |
| min | `number` | Valor mínimo | Não |
| maxLength | `number` | Tamanho máximo | Não |
| minLength | `number` | Tamanho mínimo | Não |
| placeholder | `string` | _Placeholder_ | Não |
| showError | `boolean` | Se deve exibir _helper text_ de erro | Não |
| errorMessage | `string` | Mensagem do _helper text_ de erro | Não |
| icon | `ReactNode` | Ícone do input | Não |
| hideDefaultIcon | `boolean` | Se deve ocultar ícone padrão (baseado no type) | Não |

**Exemplo de uso**

    import { SearchInput } from '@waveclass/wds-core';
    import { useState } from 'react';

    const MyComponent = () => {
        const [name, setName] = useState('');

        return (
    	    <SearchInput value={name} onChange={e => setName(e.target.value)} />
        );
    };


### Typography

**Props**
| Nome | Tipo | Descrição | Obrigatório |
|--|--|--|--|
| text | `string` | Texto a ser exibido | Sim |
| variant | `string` | Variante de tamanho e estilo. Vide **Storybook**. | Sim |
| customStyles | `CSSProperties` | Estilos customizados | Não |

**Exemplo de uso**

    import { Typography } from '@waveclass/wds-core';

    const MyComponent = () => {
        return (
    	    <Typography text='Some valueble text' variant='paragraph-bold' />
        );
    };







