import { useState } from "react";
import TagButton from "./TagButton";

interface TagListProps<T extends string> {
  tagList: T[];
  onTagChange: (tag: T) => void;
}

export default function TagList<T extends string>({ tagList, onTagChange }: TagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState(tagList[0]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const buttonEl = target.closest("button");
    const tag = buttonEl?.textContent;
    if (tag) {
      onTagChange(tag as T);
    }
  };

  return (
    <div className="flex gap-x-4" onClick={onClick}>
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          onClick={() => setSelectedTag(() => tag)}
          isChecked={selectedTag === tag}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
