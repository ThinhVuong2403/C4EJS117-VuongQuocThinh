const container = document.getElementById('list');
for(let i = 0; i < 3; i++) {
  container.insertAdjacentHTML('afterend', `<li>${i}</li>`)
}
// Câu trả lời là: 1-d; 2-a; 3-c; 4-b