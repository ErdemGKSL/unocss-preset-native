import { rules } from "../rules";
import { templates } from "../templates";

rules.push([
  /^(width|height)-(\d+vw|\d+vh|auto|\d+px|\d+\%)$/,
  ([_, k, v]) => ({
    [k]: v
  })
]);

templates.push(
  'width-',
  (str) => {
    if (!str.startsWith('width-')) return [];
    const end = str.slice(4);
    if (/^\d+$/.test(end)) {
      return [
        `width-${end}px`,
        `width-${end}vw`,
        `width-${end}vh`,
        `width-${end}%`,
      ]
    } else {
      const size = str.match(/\d+/)?.[0];
      return [
        `width-${size}px`,
        `width-${size}vw`,
        `width-${size}vh`,
        `width-${size}%`,
      ].filter(s => s.startsWith(str))
    }
  },
  'height-',
  (str) => {
    if (!str.startsWith('height-')) return [];
    const end = str.slice(4);
    if (/^\d+$/.test(end)) {
      return [
        `height-${end}px`,
        `height-${end}vw`,
        `height-${end}vh`,
        `height-${end}%`,
      ]
    } else {
      const size = str.match(/\d+/)?.[0] || "1";
      return [
        `height-${size}px`,
        `height-${size}vw`,
        `height-${size}vh`,
        `height-${size}%`,
      ].filter(s => s.startsWith(str))
    }
  }
)