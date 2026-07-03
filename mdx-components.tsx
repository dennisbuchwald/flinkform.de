import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // Tabellen in Artikeln horizontal scrollbar machen (Body darf nie scrollen)
  table: (props) => (
    <div className="table-scroll">
      <table {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
