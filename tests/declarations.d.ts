// declarations.d.ts

// ESLintの基本的な型定義
declare module '@eslint/js' {
    const eslint: any; // 型を必要に応じて詳細に定義してください
    export default eslint;
}

// eslint-plugin-reactの型定義
declare module 'eslint-plugin-react' {
    const pluginReact: any; // 型を必要に応じて詳細に定義してください
    export = pluginReact;
}

// その他のモジュールの型定義
declare module 'some-module-name' {
    export function someFunction(): void;
}

// TypeScriptの型定義を追加
declare module '*.tsx' {
    import { FC } from 'react';
    const component: FC<any>;
    export default component;
}

declare module '*.ts' {
    const value: any; // 必要に応じて型を詳細に定義
    export default value;
}
