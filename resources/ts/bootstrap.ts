import axios from 'axios';

/**
 * Axios の初期設定
 */
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// LaravelのCSRFトークンをmetaタグから取得してセット
const tokenElement = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null;

if (tokenElement) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = tokenElement.content;
} else {
  console.warn('⚠️ CSRF token not found: Please check <meta name="csrf-token" content="..."> is present.');
}

export { axios };
