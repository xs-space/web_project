import { defineConfig } from "unocss"
import presetAttributify from "@unocss/preset-attributify"
import presetUno from "@unocss/preset-uno"
import transfromDirective from "@unocss/transformer-directives"

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  transformers: [transfromDirective()]
})
