function dprModeSet() {
    switch (window.devicePixelRatio) {
        case 2:
            return 2
        case 3:
            return 3
        default:
            return 0
    }
}

export default dprModeSet