import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ja } from 'date-fns/locale/ja';
import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import customTheme from '../config/theme-config';
import store from "../stores/store";

type AppProviderProps = {
  children: ReactNode;
}

/**
 * このコンポーネントは各種 Provider を定義する
 */
export default function AppProvider({ children }: AppProviderProps) {
  // eslint-disable-next-line
  const jaLocale: any = ja;

  return (
    <>
      <CssBaseline />
      <ReduxProvider store={store} >
        <ThemeProvider theme={customTheme}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={jaLocale}
          >
            <BrowserRouter>
              {children}
            </BrowserRouter>
          </LocalizationProvider>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}
