import { rules } from "../rules";
import { templates } from "../templates";

const flexDirections = [
  'row',
  'row-reverse',
  'column',
  'column-reverse'
]

const flexWraps = [
  'nowrap',
  'wrap',
  'wrap-reverse',
  'initial',
  'inherit'
]

rules.push(
  [
    new RegExp(`^flex-direction-(${flexDirections.join('|')})$`),
    ([_, v]) => ({
      'flex-direction': v
    })
  ],
  [
    new RegExp(`^flex-wrap-(${flexWraps.join('|')})$`),
    ([_, v]) => ({
      'flex-wrap': v
    })
  ]
);

templates.push(
  `(${flexDirections.map(s => `flex-direction-${s}`).join("|")})`,
  `(${flexWraps.map(s => `flex-wrap-${s}`).join("|")})`,
)