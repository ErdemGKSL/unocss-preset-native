import type { Preset } from 'unocss'

import { shorthands } from "./shorthands"
import { templates } from "./templates"
import { rules } from './rules';

import "./load";

export function presetNative(): Preset {
  return {
    name: 'native',
    rules,
    autocomplete: {
      shorthands,
      templates
    }
  }
}