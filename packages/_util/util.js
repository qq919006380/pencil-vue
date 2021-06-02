import rough from "roughjs/bundled/rough.esm.js";
// 默认decoration
//fillStyle:
//hachure 平行线，它可以使用fillWeight、hachureAngle和hachureGap属性进一步配置。
//solid  传统的填充。
//zigzag 之字形 绘制之字形线条填充形状
//cross-hatch 与hachure相似，但绘制交叉的hatch线（类似于两个相互成90度的hachure填充）。
//dots 圆点 用素描的圆点填充形状。
//dashed 虚线 与hachure类似，但个别线条是虚线。虚线可以用dashOffset和dashGap属性来配置。
//zigzag-line  与 hachure 类似，但个别线条是以 zig-zag 的方式绘制。之字形的大小可以使用 zigzagOffset 属性来配置 
let d = {
  //填充
  fillWeight: 1.3,//填充的粗细
  hachureAngle: -60, // 填充的角度,
  hachureGap: 2,//填充率
  fillStyle: "solid",//填充样式
  seed: 0,//填充超出边框线
  fill:"#fff",
  // 外边框线
  stroke: "#555",//线的颜色
  strokeWidth: 1,//线的粗细
  bowing: 4,//线条扭曲程度
  roughness: 1,//线条凌乱程度  
}
export class render {
  constructor(el, csys) {
    this.rough = rough
    this.host = el
    this.svg = ""
    this.handles = {}; // 事件处理函数集合
    this.s = null
    this.decoration = {}
    Object.assign(this.decoration, d);


    this.initSvg()

    // 订阅
    this.on("watchHost", () => {
      if (csys) {
        this.render_csys(csys)
      } else {
        this.render_box()
      }

    })



  }

  initSvg() {
    // 拦截背景颜色换成svg填充
    // this.decoration.fill = getComputedStyle(this.host, null).backgroundColor
    // this.host.style.background = "transparent"
    // 插入svg-dom
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var overlay = document.createElement("div")
    overlay.classList.add('pencil_overlay');
    overlay.appendChild(this.svg);
    this.host.appendChild(overlay);
    // 发布-监控domSize
    this.watchDom(this.host, (csys) => {
      this.emit("watchHost", rough);
    })

  }
  $(dom) {
    return this.host.querySelector(dom)
  }
  // 渲染盒子
  render_box() {
    this.s = this.host.getBoundingClientRect();
    this.elev = Math.min(Math.max(0, this.elevation), 5);
    this.clearNode()
    this.svg.setAttributeNS(null, "width", this.s.width);
    this.svg.setAttributeNS(null, "height", this.s.height);
    this.svg.setAttributeNS(null, "overflow", "overlay");
    const rc = rough.svg(this.svg);
    let node = rc.rectangle(0.5, 0.5, this.s.width - 1, this.s.height - 1,
      this.decoration
    );
    this.svg.appendChild(node);
  }
  // 渲染不规则图案
  render_csys(csys) {
    this.s = this.host.getBoundingClientRect();
    this.clearNode()
    this.svg.setAttributeNS(null, "width", this.s.width);
    this.svg.setAttributeNS(null, "height", this.s.height);
    this.svg.setAttributeNS(null, "overflow", "overlay");
    const rc = rough.svg(this.svg);
    let node = rc.polygon(csys, this.decoration);
    node.style.opacity = 0.8;
    this.svg.appendChild(node);
  }
  clearNode() {
    while (this.svg.hasChildNodes()) {
      this.svg.removeChild(this.svg.lastChild);
    }
  }



  //订阅事件
  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = [];
    }
    if (typeof handle == "function") {
      this.handles[eventType].push(handle);
    } else {
      throw new Error("缺少回调函数");
    }
    return this;
  }
  // 发布事件
  emit(eventType, ...args) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item, key, arr) => {
        item.apply(null, args);
      });
    } else {
      throw new Error(`"${eventType}"事件未注册`);
    }
    return this;
  }
  setSvgStyle(obj) {
    Object.assign(this.decoration, obj);
  }

  /**
   * 监听元素的变化并执行回调函数
   * @param {Function} callback 回调函数
   */
  watchDom(dom, callback) {
    const myObserver = new ResizeObserver(() => {
      callback()
    });
    myObserver.observe(dom);
  }
}




