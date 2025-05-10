export const getExcerpt = (html: string, length: number) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > length ? `${text.slice(0, length)}...` : text;
};
