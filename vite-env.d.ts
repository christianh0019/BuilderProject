/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPENAI_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
