import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import styled from '@mui/system/styled';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: 'primary' | 'secondary' | 'warning';
}>(({ theme, color }) => ({
  minWidth: 'auto',
  border: color === 'warning' ? `1px solid ${theme.palette.warning.main}` : `1px solid ${theme.palette.primary.main}`,
  backgroundColor: color === 'primary' ? theme.palette.primary.main : theme.palette.background.default,
  color:
    color === 'primary'
      ? theme.palette.primary.contrastText
      : color === 'warning'
        ? theme.palette.warning.main
        : theme.palette.primary.main,
  '&:hover': {
    backgroundColor:
      color === 'primary'
        ? alpha(theme.palette.primary.main, 0.8)
        : alpha(theme.palette.background.default, 0.8),
    border:
      color === 'warning'
        ? `1px solid ${alpha(theme.palette.warning.main, 0.6)}`
        : `1px solid ${alpha(theme.palette.primary.main, 0.6)}`,
  },
  '&:disabled': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.text.secondary}`,
  },
  zIndex: 0,
}));
