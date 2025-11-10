---
to: resources/ts/components/<%= dir %>/<%= dir %>.tsx
---
import { } from './styled';

type Props = {};

/**
 * このコンポーネントは xxx 要素を提供する
 */
export default function <%= h.changeCase.pascalCase(h.path.basename(dir)) %>({ }: Props) {
  return (
    <>
    </>
  );
}
