const observer = new IntersectionObserver((entries) => {
    entries.forEach(v => {
        if(v.isIntersecting) {
            v.target.classList.add('sliding')
        }
    })
})

export const slide = () => {
    document.querySelectorAll('.slideable').forEach((v) => {
        observer.observe(v);
    })
}