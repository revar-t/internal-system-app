# Git 運用方針（個人開発向け）

## 1. ブランチ構成

- **main**
  - 常に安定版
  - デプロイやリリースに使う
- **develop**
  - 日常の開発作業を積むブランチ
  - 機能追加・修正・調整などすべてここで作業
  - 定期的に main にマージ

※必要になれば将来的に `feature/xxx` や `hotfix/xxx` ブランチを作ることも可

---

## 2. コミット方針

- 粒度は厳密に気にしなくても良い
  - 大きめの作業をまとめてコミットしても OK
- メッセージは分かりやすければ良い
  - 日本語推奨（例：「Web ルート整理、welcome.blade.php 削除」）
  - 英語でも可（例：「Update web routes and remove welcome view」）

---

## 3. 作業フロー

1. **develop に切り替え**

   ```bash
   git checkout develop
   ```

2. **作業内容を編集**
3. **ステージング**

   ```bash
   git add .
   ```

4. **コミット**

   ```bash
   git commit -m "わかりやすいメッセージ"
   ```

5. **リモートに push**

   ```bash
   git push origin develop
   ```

6. **作業完了時は main にマージ**

   - GitHub で Pull Request を作成してマージするのが推奨
   - 個人開発ならコマンドでも可：

     ```bash
     git checkout main
     git merge develop
     git push origin main
     ```

---

## 4. 注意点

- main に直接コミットしない
- 途中で作業を中断する場合も develop にコミットしておく
- GitHub 上の PR はレビュー用だけでなく、変更確認にも便利
