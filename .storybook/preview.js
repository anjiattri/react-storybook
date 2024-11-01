import React from "react";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
/** @type { import('@storybook/react').Preview } */
export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  tags: ["autodocs"],
};

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m={4}>{story()}</Box>
    </ThemeProvider>
  ),
];
