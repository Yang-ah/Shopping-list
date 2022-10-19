// 3. setEventListeners : 버튼을 누르면 필터링을 해주는 이벤트리스너

loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
