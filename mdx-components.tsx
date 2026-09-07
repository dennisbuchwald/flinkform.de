import type { MDXComponents } from "mdx/types";
import AnswerBlock from "@/components/AnswerBlock";

const components: MDXComponents = {
  // Tabellen in Artikeln horizontal scrollbar machen (Body darf nie scrollen)
  table: (props) => (
    <div className="table-scroll">
      <table {...props} />
    </div>
  ),
  // Ohne Import in jedem Artikel verwendbar
  AnswerBlock,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
