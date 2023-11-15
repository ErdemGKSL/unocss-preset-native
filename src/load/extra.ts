import { rules } from "../rules";
import { templates } from "../templates";

rules.push([
  /^(gap)-(\d+vw|\d+vh|auto|\d+px|\d+\%)$/,
  ([_, k, v]) => ({
    [k]: v
  })
]);

templates.push(
  async (str) => {
    if (!str.startsWith('gap-')) return [];
    const end = str.slice(4);
    if (/^\d+$/.test(end)) {
      return [
        `gap-${end}px`,
        `gap-${end}vw`,
        `gap-${end}vh`,
        `gap-${end}%`,
      ]
    } else {
      const size = str.match(/\d+/)?.[0];
      return [
        `gap-${size}px`,
        `gap-${size}vw`,
        `gap-${size}vh`,
        `gap-${size}%`,
      ].filter(s => s.startsWith(str))
    }
  }
)