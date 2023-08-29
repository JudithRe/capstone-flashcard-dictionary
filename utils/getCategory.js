export async function getCategory(activeUser, categoryName) {
  const id = activeUser._id;

  if (id !== "default") {
    const response = await fetch(
      `/api/word-list/category/new/${id}/${categoryName}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const category = await response.json();
      return category;
    }
  }
}
