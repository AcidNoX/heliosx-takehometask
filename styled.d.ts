// import original module declarations
import 'styled-components/native';
import { Colors } from './constants/Colors';
import { Spacing } from './constants/Spacing';

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof Colors;
    spacing: typeof Spacing;
  }
}
