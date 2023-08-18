import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

function CategorySelector({ categoryData, wordList, handleFilterWordList }) {
  const router = useRouter();

  useEffect(() => {
    handleFilterWordList(wordList);
  }, [wordList]);

  if (!wordList) {
    return;
  }

  function handleDropdownChange(event) {
    if (event.target.value === "create") {
      router.push("/categories");
      return;
    }

    if (event.target.value === "default") {
      handleFilterWordList(wordList);
      return;
    }

    handleFilterWordList(
      wordList.filter((entry) => entry.category === event.target.value)
    );
  }

  return (
    <StyledCategoryForm aria-label="choose category">
      {categoryData && (
        <StyledCategorySelector
          onChange={(event) => handleDropdownChange(event)}
        >
          <option value="default" selected>
            Choose a Category
          </option>
          {categoryData.map((category) => {
            return (
              <option key={`select${category._id}`} value={category._id}>
                {category.name}
              </option>
            );
          })}

          <option value="create">... Create a new category</option>
        </StyledCategorySelector>
      )}
    </StyledCategoryForm>
  );
}
const StyledCategoryForm = styled.form`
  background-color: var(--dark-main);
  padding: 0 25px;
  border-radius: var(--border-radius);
`;
export const StyledCategorySelector = styled.select`
  background-color: inherit;
  color: var(--dark-mode-text-color);
  padding: 10px;
  border: none;

  font-size: 1.2rem;
`;

export default CategorySelector;
