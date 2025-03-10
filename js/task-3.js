function getElementWidth(content, padding, border) {
  // Перетворюємо значення з 'Npx' у число
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Загальна ширина елемента.
  //  Якщо box-sizing: border-box,
  // то загальна ширина обчислюється так:
  // totalWidth=content+2×(padding+border)

  const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
