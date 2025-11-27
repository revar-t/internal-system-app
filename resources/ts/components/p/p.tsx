import type { Theme, SxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import type { ReactNode } from 'react';
import type { Variant } from '../../types/common';

type Props = {
  /** このプロジェクトで使用される MUI Typography の variant の型 */
  v?: Variant;
  /** sx スタイル */
  sx?: SxProps<Theme>;
  children: ReactNode;
};

/**
 * このコンポーネントは memo 化した MUI Typography 要素を提供する
 */
function P({ v = 'body1', sx = {}, children }: Props) {
  return (
    <Typography variant={v} sx={sx}>
      {children}
    </Typography>
  );
}

export default memo(P);
