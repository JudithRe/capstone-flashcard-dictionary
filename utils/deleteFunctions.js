// Delete entry from database

export async function deleteEntry(_id, databaseMutate) {
  const response = await fetch(`/api/word-list/item/${_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    databaseMutate();
  } else {
    console.log("There was a problem ", response.status);
  }
}

// Delete category from database

export async function deleteCategory(
  _id,
  categoryMutate,
  wordList,
  databaseMutate
) {
  const response = await fetch(`/api/word-list/category/item/${_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    categoryMutate();

    const entriesToChange = wordList.filter((entry) => {
      return entry.category[0] === _id;
    });

    if (entriesToChange.length > 0) {
      entriesToChange.forEach((element) => {
        const updatedEntry = { ...element, category: [], categoryName: "" };
        updateCategoryInEntry(updatedEntry._id, updatedEntry, databaseMutate);
        return;
      });
    }
  } else {
    console.log("There was a problem ", response.status);
  }
}

export async function updateCategoryInEntry(_id, updatedEntry, databaseMutate) {
  const response = await fetch(`/api/word-list/item/${_id}`, {
    method: "PUT",
    body: JSON.stringify(updatedEntry),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    databaseMutate();
  }
}
