export function xy( contentWrapper,host, props) {
    // 渲染svg坐标
    let csys = () => {
        const { width: w, height: h } = host.value.getBoundingClientRect();
        const { width } = contentWrapper.value.getBoundingClientRect();
        var offset = 0;
        let val = "";
        switch (props.position) {
            case "top":
                val = [
                    [2, 2],
                    [w - 2, 2],
                    [w - 2, h - offset],
                    [width / 2 + 8, h - offset],
                    [width / 2, h - offset + 8],
                    [width / 2 - 8, h - offset],
                    [0, h - offset],
                ];
                break;
            case "left":
                val = [
                    [2, 2],
                    [w - offset, 2],
                    [w - offset, h / 2 - 8],
                    [w - offset + 8, h / 2],
                    [w - offset, h / 2 + 8],
                    [w - offset, h],
                    [2, h - 2],
                ];
                break;
            case "right":
                val = [
                    [offset, 2],
                    [w - 2, 2],
                    [w - 2, h - 2],
                    [offset, h - 2],
                    [offset, h / 2 + 8],
                    [offset - 8, h / 2],
                    [offset, h / 2 - 8],
                ];

                break;
            default:
                val = [
                    [2, offset],
                    [0, h - 2],
                    [w - 2, h - 2],
                    [w - 2, offset],
                    [width / 2 + 8, offset],
                    [width / 2, offset - 8],
                    [width / 2 - 8, offset],
                ];
        }
        return val;
    }
    // 弹窗的位置
    let positionContent = () => {
        const {
            width,
            height,
            top,
            left,
        } = contentWrapper.value.getBoundingClientRect();

        const { height: height2 } = host.value.getBoundingClientRect();
        let positions = {
            top: {
                top: top + window.scrollY,
                left: left + window.scrollX,
            },
            bottom: {
                top: top + height + window.scrollY,
                left: left + window.scrollX,
            },
            left: {
                top: top + window.scrollY + (height - height2) / 2,
                left: left + window.scrollX,
            },
            right: {
                top: top + window.scrollY + (height - height2) / 2,
                left: left + window.scrollX + width,
            },
        };
        host.value.style.left = positions[props.position].left + "px";
        host.value.style.top = positions[props.position].top + "px";
    }
    return { csys, positionContent }
}