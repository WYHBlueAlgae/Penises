function displayText() {
    const text = "这是ding.bluealgae.net的主页";  // 你想要展示的文本
    const displayElement = document.getElementById("display"); // 获取展示文本的DOM元素
  
    // 将文本显示在页面上
    displayElement.innerText = text;
  }
  
  // 在页面加载完成后调用显示文本的函数
  window.addEventListener("load", displayText);
  