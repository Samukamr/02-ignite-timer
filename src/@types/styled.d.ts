import 'styled-components'
import type { defaultTheme } from '../styles/themes/dafault'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// Arquivo de definição de tipos

// só vou ter códigos de definição de tipos do typescript
// e nunca código javascrip ou qualquer coisa assim.
