import css from './PageHeading.module.css';

export function PageHeading({ text }) {
  return <h1 className={css.title}>{text}</h1>;
}
