/* eslint-disable @typescript-eslint/naming-convention */
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { SxProps } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { forwardRef, useState } from 'react';
import { InputBase } from './styled';

type Props = {
  /** 入力されている文言 */
  value: string;
  /** 文言入力時に実行される dispatch */
  onChange?: (value: string) => void;
  /** input の type */
  type?: 'text' | 'password' | 'number';
  /** input の横幅(px) */
  inputWidth?: number;
  /** input の横幅を 100% にするかどうか */
  fullWidth?: boolean;
  /** 枠線の色をエラー色にするかどうか */
  isBorderColorError?: boolean;
  /** sx スタイル */
  sx?: SxProps;
  /** placeholder */
  placeholder?: string;
  /**
   * inputMode属性（スマホなどで最適なキーボードを表示するための設定）
   * 例: 'text', 'numeric', 'decimal', 'tel', 'email', 'url'
   * type属性とは違い、バリデーションは行わずキーボード表示のみ制御します。
   * 未対応の値を指定してもエラーにはなりません。
   */
  inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'email' | 'url';
};

/**
 * このコンポーネントは 汎用的なインプット 要素を提供する
 */
const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    value,
    onChange = null,
    type = 'text',
    inputWidth = 300,
    fullWidth = false,
    isBorderColorError = false,
    sx,
    placeholder,
    inputMode,
  },
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);
  // パスワード表示切替
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative' }}>
      <InputBase
        ref={ref}
        value={value}
        {...(onChange ? { onChange: (e) => onChange(e.target.value) } : {})} // ← onChangeがnullのときは何も設定しない
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        inputWidth={inputWidth}
        fullWidth={fullWidth}
        isBorderColorError={isBorderColorError}
        // inputMode属性を追加。スマホで最適なキーボードを表示するためのもの。
        inputMode={inputMode}
        sx={{
          paddingRight: type === 'password' ? 36 : undefined, // アイコン分余白
          ...sx,
        }}
        placeholder={placeholder ?? ""}
      />
      {type === 'password' && (
        <IconButton
          onClick={handleClickShowPassword}
          size='small'
          sx={{
            position: 'absolute',
            right: 4,
            top: '50%',
            transform: 'translateY(-50%)',
            padding: 0,
          }}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      )}
    </div>
  );
});

export default Input;
