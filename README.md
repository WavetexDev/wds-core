# Waveclass Design System (WDS) - Core

Este repositório pertence à organização Wavetex e tem o objetivo de reunir os componentes padronizados da grade de estilos da plataforma Waveclass para Web.

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
