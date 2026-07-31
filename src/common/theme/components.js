export default {
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      '*': {
        scrollbarWidth: 'thin',
        scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.default}`,
      },
      '*::-webkit-scrollbar': {
        width: theme.spacing(1),
        height: theme.spacing(1),
      },
      '*::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.background.default,
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
        border: `2px solid ${theme.palette.background.default}`,
        borderRadius: '999px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    }),
  },
  MuiUseMediaQuery: {
    defaultProps: {
      noSsr: true,
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      sizeMedium: {
        height: '40px',
      },
    },
  },
  MuiFormControl: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      enterDelay: 500,
      enterNextDelay: 500,
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        '@media print': {
          color: theme.palette.alwaysDark.main,
        },
      }),
    },
  },
};
