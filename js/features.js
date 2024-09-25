document.getElementById('donate-btn')
  .addEventListener('click', function(){
    showSectionById('donation-form');
  })

document.getElementById('donate-btn').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#B4F461'; 
});

document.getElementById('donate-btn').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white'; 
});  

document.getElementById('history-btn')
  .addEventListener('click', function(){
    showSectionById('history');
})

document.getElementById('history-btn').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#B4F461'; 
});

document.getElementById('history-btn').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white'; 
}); 

document.getElementById('blog-btn')
  .addEventListener('click', function(){
    window.location.href = './blog.html';
  }) 