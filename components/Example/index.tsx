import css from './Example.module.css';

export const Example: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <h1 className={css.example}>Hello Next.js 9.3</h1>
    <p>With TypeScript, TailwindCSS, and inlined Critical CSS</p>
  </div>
);
