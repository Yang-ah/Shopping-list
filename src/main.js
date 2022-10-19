// 2. displayItems : data를 넘겨받아 HTML에 보여주는 함수
// items를 성공적으로 받아온 뒤,
// 받아온 items들을 displayItems 함수를 통해
// HTML에 보여주가

loadItems()
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);
