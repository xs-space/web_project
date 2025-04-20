import js from "@eslint/js" // 校验js规范
import globals from "globals"
import tseslint from "typescript-eslint" // ts规范
import pluginVue from "eslint-plugin-vue" // vue规范
import { defineConfig } from "eslint/config"
import prettierRecommended from "eslint-plugin-prettier/recommended"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"], // 校验vue中的ts代码
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    // 根据需要增加自己的规则
    rules: {
      "no-console": "warn",
      "vue/multi-word-component-names": "off"
    }
  },
  prettierRecommended // 覆盖掉eslint规范
])
