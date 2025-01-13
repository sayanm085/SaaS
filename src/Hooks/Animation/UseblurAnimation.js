// Desc: Blur animation for the components


function UseblurAnimation() {

    let blurAnimation = {
        offscreen: { opacity: 0, filter: 'blur(10px)' },
        onscreen: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1, staggerChildren:0.3 } },
        exit: { opacity: 0, filter: 'blur(10px)', transition: { duration: 1 } }
    }
    
    return blurAnimation;
}

export default UseblurAnimation;