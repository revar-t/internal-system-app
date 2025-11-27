import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import { routes } from '../../config/routes-config';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

type Props = {
  /** 現在のパス */
  currentPath: string;
  /** 表示する子要素 */
  children: ReactNode;
};

const drawerWidth = 240;
/**
 * このコンポーネントはレイアウト機能を提供する
 */
export default function Layout({ currentPath, children }: Props) {
  const isDisplayLayout =
    currentPath !== routes.login?.path;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {isDisplayLayout && <Header />}
      <Box sx={{ display: 'flex', flexGrow: 1, minHeight: 0 }}>
        {isDisplayLayout && <Sidebar drawerWidth={drawerWidth} />}
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#fafafa',
            overflowY: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
