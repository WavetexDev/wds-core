# Waveclass Design System (WDS) - Core

Este repositório pertence à organização Wavetex e tem o objetivo de reunir os componentes padronizados da grade de estilos da plataforma Waveclass para Web.

## Sumário

-   [Tecnologias utilizadas](#tecnologias-utilizadas)
-   [Storybook](#storybook)
-   [Instalação](#instalação)
-   [Utilitários](#utilitários)

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

### toStyledComponent

Esta _utility function_ recebe como argumento um objeto do tipo `CSSProperties` e o transforma em `string` para inserção de estilos customizados em componentes feitos com StyledComponents.

    import styled from 'styled-components';
    import { toStyledComponent } from '@waveclass/wds-core';

    export const MyStyledComponent = styled.div<{ customStyles?: CSSProperties }>`
        // ... some styles

        ${({ customStyles }) => customStyles && toStyledComponent(customStyles)}
    `;
