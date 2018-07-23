import { SceneManager } from './SceneManager';
import { SubjectManager } from './SubjectManager';

class ThreeEntryPoint{
  constructor(container){
    this.canvas = this.createCanvas(document, container);
    this.sceneManager = new SceneManager(this.canvas);
    this.subjectManager = new SubjectManager(this.sceneManager.getScene());
    
    this.canvas.onclick = this.sceneManager.onSceneClick;
    
    this.render = this.render.bind(this);
    this.resizeCanvas = this.resizeCanvas.bind(this);
    this.init = this.init.bind(this);
  }
  
  init(){
    this.bindEventListeners();
    this.render();
  }
  
  createCanvas(document, container) {
    let canvas = document.createElement('canvas');     
    container.appendChild(canvas);
    return canvas;
  }
  
  bindEventListeners() {
    window.onresize = this.resizeCanvas;
    this.resizeCanvas();	
  }
  
  resizeCanvas() {        
    this.canvas.style.width = '100%';
    this.canvas.style.height= '100%';
    
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.sceneManager.onWindowResize();
  }

  updateState(newItems){
    this.subjectManager.resetState(newItems);
  }

  render() {
    requestAnimationFrame(this.render);
    this.sceneManager.update();
  }
}

export { ThreeEntryPoint };