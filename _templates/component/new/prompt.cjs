/* eslint-disable */
// モジュール外では import 文を使用できないため eslint-disable を適応する
const path = require('path');
const { kebabCase } = require('change-case');

module.exports = [
  {
    type: 'input',
    name: 'dir',
    message: '汎用的に使用される React コンポーネント名称を入力してください',
    validate(input) {
      // 空文字列は不可
      if (input === '') return `入力が必須です`;

      // ケバブケースに変換
      const dirs = input.split(path.sep);
      const lastDir = dirs.pop();
      const kebabCased = kebabCase(lastDir);
      if (kebabCased !== lastDir)
        return `ケバブケースで指定する必要があります。${kebabCased} と指定してください。`;

      return true;
    },
  },
];
