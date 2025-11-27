interface Route {
  path: string;
  menuLabel: string;
};

interface Routes {
  [key: string]: Route;
};

export const routes: Routes = {
  login: {
    path: '/',
    menuLabel: 'ログイン',
  },
  dashboard: {
    path: '/dashboard',
    menuLabel: 'ダッシュボード',
  },
};
