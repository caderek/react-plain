import { ReactChild, ReactNode } from 'react'
import wrapElement from './wrapElement'

type Tag = (props: object, ...children: ReactChild[]) => ReactNode

const __ = null

const a: Tag = wrapElement('a')
const abbr: Tag = wrapElement('abbr')
const address: Tag = wrapElement('address')
const area: Tag = wrapElement('area')
const article: Tag = wrapElement('article')
const aside: Tag = wrapElement('aside')
const audio: Tag = wrapElement('audio')
const b: Tag = wrapElement('b')
const base: Tag = wrapElement('base')
const bdi: Tag = wrapElement('bdi')
const bdo: Tag = wrapElement('bdo')
const blockquote: Tag = wrapElement('blockquote')
const body: Tag = wrapElement('body')
const br: Tag = wrapElement('br')
const button: Tag = wrapElement('button')
const canvas: Tag = wrapElement('canvas')
const caption: Tag = wrapElement('caption')
const cite: Tag = wrapElement('cite')
const code: Tag = wrapElement('code')
const col: Tag = wrapElement('col')
const colgroup: Tag = wrapElement('colgroup')
const content: Tag = wrapElement('content')
const data: Tag = wrapElement('data')
const datalist: Tag = wrapElement('datalist')
const dd: Tag = wrapElement('dd')
const del: Tag = wrapElement('del')
const details: Tag = wrapElement('details')
const dfn: Tag = wrapElement('dfn')
const dialog: Tag = wrapElement('dialog')
const div: Tag = wrapElement('div')
const dl: Tag = wrapElement('dl')
const dt: Tag = wrapElement('dt')
const em: Tag = wrapElement('em')
const embed: Tag = wrapElement('embed')
const fieldset: Tag = wrapElement('fieldset')
const figcaption: Tag = wrapElement('figcaption')
const figure: Tag = wrapElement('figure')
const footer: Tag = wrapElement('footer')
const form: Tag = wrapElement('form')
const h1: Tag = wrapElement('h1')
const h2: Tag = wrapElement('h2')
const h3: Tag = wrapElement('h3')
const h4: Tag = wrapElement('h4')
const h5: Tag = wrapElement('h5')
const h6: Tag = wrapElement('h6')
const head: Tag = wrapElement('head')
const header: Tag = wrapElement('header')
const hgroup: Tag = wrapElement('hgroup')
const hr: Tag = wrapElement('hr')
const html: Tag = wrapElement('html')
const i: Tag = wrapElement('i')
const iframe: Tag = wrapElement('iframe')
const img: Tag = wrapElement('img')
const input: Tag = wrapElement('input')
const ins: Tag = wrapElement('ins')
const kbd: Tag = wrapElement('kbd')
const label: Tag = wrapElement('label')
const legend: Tag = wrapElement('legend')
const li: Tag = wrapElement('li')
const link: Tag = wrapElement('link')
const main: Tag = wrapElement('main')
const map: Tag = wrapElement('map')
const mark: Tag = wrapElement('mark')
const menu: Tag = wrapElement('menu')
const meta: Tag = wrapElement('meta')
const meter: Tag = wrapElement('meter')
const nav: Tag = wrapElement('nav')
const noscript: Tag = wrapElement('noscript')
const object: Tag = wrapElement('object')
const ol: Tag = wrapElement('ol')
const optgroup: Tag = wrapElement('optgroup')
const option: Tag = wrapElement('option')
const output: Tag = wrapElement('output')
const p: Tag = wrapElement('p')
const param: Tag = wrapElement('param')
const picture: Tag = wrapElement('picture')
const pre: Tag = wrapElement('pre')
const progress: Tag = wrapElement('progress')
const q: Tag = wrapElement('q')
const rb: Tag = wrapElement('rb')
const rp: Tag = wrapElement('rp')
const rt: Tag = wrapElement('rt')
const ruby: Tag = wrapElement('ruby')
const s: Tag = wrapElement('s')
const samp: Tag = wrapElement('samp')
const script: Tag = wrapElement('script')
const section: Tag = wrapElement('section')
const select: Tag = wrapElement('select')
const shadow: Tag = wrapElement('shadow')
const slot: Tag = wrapElement('slot')
const small: Tag = wrapElement('small')
const source: Tag = wrapElement('source')
const span: Tag = wrapElement('span')
const strong: Tag = wrapElement('strong')
const style: Tag = wrapElement('style')
const sub: Tag = wrapElement('sub')
const summary: Tag = wrapElement('summary')
const sup: Tag = wrapElement('sup')
const svg: Tag = wrapElement('svg')
const table: Tag = wrapElement('table')
const tbody: Tag = wrapElement('tbody')
const td: Tag = wrapElement('td')
const template: Tag = wrapElement('template')
const textarea: Tag = wrapElement('textarea')
const tfoot: Tag = wrapElement('tfoot')
const th: Tag = wrapElement('th')
const thead: Tag = wrapElement('thead')
const time: Tag = wrapElement('time')
const title: Tag = wrapElement('title')
const tr: Tag = wrapElement('tr')
const track: Tag = wrapElement('track')
const u: Tag = wrapElement('ul')
const ul: Tag = wrapElement('ul')
const var_: Tag = wrapElement('var') // tslint:disable-line
const video: Tag = wrapElement('video')
const wbr: Tag = wrapElement('wbr')

type Tags = {
  __: null
  [key: string]: Tag
}

const tags: Tags = {
  __,
  a,
  abbr,
  address,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  content,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  dialog,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  menu,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  picture,
  pre,
  progress,
  q,
  rb,
  rp,
  rt,
  ruby,
  s,
  samp,
  script,
  section,
  select,
  shadow,
  slot,
  small,
  source,
  span,
  strong,
  style,
  sub,
  summary,
  sup,
  svg,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  var_,
  video,
  wbr,
}

export {
  __,
  a,
  abbr,
  address,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  content,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  dialog,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  menu,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  picture,
  pre,
  progress,
  q,
  rb,
  rp,
  rt,
  ruby,
  s,
  samp,
  script,
  section,
  select,
  shadow,
  slot,
  small,
  source,
  span,
  strong,
  style,
  sub,
  summary,
  sup,
  svg,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  var_,
  video,
  wbr,
}

export default tags
