/** キャメルケースに変換するための型 */
type CamelCase<T> = T extends Record<string, unknown>
  ? { [K in keyof T]: CamelCase<T[K]> }
  : T extends (infer U)[]
    ? U extends Record<string, unknown>
      ? CamelCase<U>[]
      : T
    : T;

/**
 * スネークケースやケバブケースの文字列をキャメルケースに変換する関数
 * @param {T} obj オブジェクト
 * @returns {CamelCase<T>} キャメルケースのキーを持つオブジェクト
 */
const camelCaseConverter = <T extends Record<string, unknown>>(obj: T): CamelCase<T> => {
  if (Array.isArray(obj)) {
    return obj.map(camelCaseConverter) as unknown as CamelCase<T>;
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', '')),
        camelCaseConverter(value as Record<string, unknown>),
      ]),
    ) as unknown as CamelCase<T>;
  }
  return obj as CamelCase<T>;
};

export default camelCaseConverter;
