export function onEvent(contentWrapper, host, modalOpen, props) {
    var onClickDocument = (e) => {
        if (
            contentWrapper.value &&
            (contentWrapper.value === e.target ||
                contentWrapper.value.contains(e.target))
        ) {
            return;
        }
        if (
            host.value &&
            (host.value === e.target || host.value.contains(e.target))
        ) {
            return;
        }
        close();
    };

    var onClick = (event) => {
        if (contentWrapper.value.contains(event.target)) {
            if (modalOpen.value === true) {
                close();
            } else {
                open();
            }
        }
    };
    var open = () => {
        modalOpen.value = true;
        document.addEventListener("click", onClickDocument);
    };
    var close = () => {
        modalOpen.value = false;
        document.removeEventListener("click", onClickDocument);
    };

    function addPopoverListeners() {
        if (props.trigger === "click") {
            contentWrapper.value.addEventListener("click", onClick);
        } else {
            contentWrapper.value.addEventListener("mouseenter", open);
            contentWrapper.value.addEventListener("mouseleave", close);
        }
    }
    function removePopoverListeners() {
        if (props.trigger === "click") {
            contentWrapper.value.removeEventListener("click", onClick);
        } else {
            contentWrapper.value.removeEventListener("mouseenter", open);
            contentWrapper.value.removeEventListener("mouseleave", close);
        }
    }
    return { addPopoverListeners, removePopoverListeners }
}
