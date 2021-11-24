class SplashScreen {
  #splashElement = document.createElement('div');
  render() {
    // create style in head of index
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
      .splash-screen {
      background: url('./assets/splash-screen.jpg') no-repeat; 
      width: 650px;
      height: 650px;
      }
      .splash-screen-1 {background-position-x: 0px;
      }
      .splash-screen-2 {background-position-x: -650px;}
                    `;
    document.head.appendChild(styleElement);

    // create div and adding class of slpash-screen
    
    this.#splashElement.classList.add("splash-screen");
    const rootElement = document.getElementById('root');
    rootElement.appendChild(this.#splashElement);
    this.#animate();
    


  }
  destroy() {
    this.#splashElement.remove();
  }
  #animate(){
    this.#splashElement.classList.add('splash-screen-2');
  }
}
