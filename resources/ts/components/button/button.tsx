import type { SxProps, Theme } from '@mui/material';
import type { MouseEvent, MouseEventHandler } from 'react';
import P from '../p';
import { StyledButton } from './styled';

type Props = {
  /** ボタンに表示する文字列 */
  label: string;
  /** ボタンクリック時に呼び出される関数 */
  onClick: (() => void) | ((e: MouseEvent<HTMLInputElement>) => void);
  /** ボタンが非活性かどうか */
  isDisabled?: boolean;
  /** カラータイプ */
  color?: 'primary' | 'secondary' | 'warning';
  /** sx スタイル */
  sx?: SxProps<Theme>;
};

/**
 * このコンポーネントは 汎用ボタン 要素を提供する
 */
export default function Button({
  label,
  onClick,
  isDisabled = false,
  color = 'primary',
  sx,
}: Props) {
  return (
    <StyledButton
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={isDisabled}
      color={color}
      type='button'
      {...(sx ? { sx } : {})}
    >
      <P sx={{ whiteSpace: 'nowrap' }}>
        {label}
      </P>
    </StyledButton>
  );
}
