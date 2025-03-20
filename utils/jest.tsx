import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import { ThemeProvider } from 'styled-components/native';
import { render } from '@testing-library/react-native';

export const testQueryClient = new QueryClient();

export const renderWithWrapper = <T,>(component: React.ReactElement<T>) => {
  return render(
    <QueryClientProvider client={testQueryClient}>
      <ThemeProvider theme={{ colors: Colors, spacing: Spacing }}>
        {component}
      </ThemeProvider>
    </QueryClientProvider>,
  );
};
