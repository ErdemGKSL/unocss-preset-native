import { rules } from "../rules";
import { templates } from "../templates";

const displayTypes = [
  'inline',
  'block',
  'contents',
  'flex',
  'grid',
  'inline-block',
  'inline-flex',
  'inline-grid',
  'inline-table',
  'list-item',
  'run-in',
  'table',
  'table-caption',
  'table-column-group',
  'table-header-group',
  'table-footer-group',
  'table-row-group',
  'table-cell',
  'table-column',
  'table-row',
  'none',
  'initial',
  'inherit'
]

rules.push([
  new RegExp(`^display-(${displayTypes.join('|')})$`),
  ([_, v]) => ({
    display: v
  })
]);

templates.push(
  `(${displayTypes.map(s => `display-${s}`).join("|")})`,
)