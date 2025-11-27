import { alpha, InputBase as MuiInputBase } from '@mui/material';
import styled from '@mui/system/styled';
import theme from '../../config/theme-config';

interface InputBaseProp {
  inputWidth: number | string;
  fullWidth: boolean;
  isBorderColorError: boolean;
}

export const InputBase = styled(MuiInputBase, {
  shouldForwardProp: (prop) =>
    prop !== 'inputWidth' &&
    prop !== 'fullWidth' &&
    prop !== 'isBorderColorError' ,
})<InputBaseProp>(({ inputWidth, fullWidth, isBorderColorError }) => ({
  width: fullWidth ? '100%' : typeof inputWidth === 'number' ? `${inputWidth}px` : inputWidth,
  height: 28,
  border: `1px solid ${isBorderColorError ? theme.palette.error.main : alpha(theme.palette.text.primary, 0.7)}`,
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.primary,
  padding: '2px',
  backgroundColor: theme.palette.background.default,
  '&:hover': {
    borderColor: isBorderColorError ? theme.palette.error.main : alpha(theme.palette.text.primary, 0.5),
  },
  '&.Mui-focused': {
    border: `2px solid ${alpha(theme.palette.text.primary, 0.9)}`,
  },
}));
