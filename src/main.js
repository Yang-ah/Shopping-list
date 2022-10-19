// 1. loadItems : data를 받아오면, promise를 return하는 함수
// items를 그냥 return하지 않고 promise를 return하는 이유 : data.json을 동적으로 읽어오는 시간이 있기 때문
// then(성공), items을 받아와서 함수를 실행
// catch(실패), 콘솔에 나타냄.

loadItems()
  .then((items) => {})
  .catch(console.log);
