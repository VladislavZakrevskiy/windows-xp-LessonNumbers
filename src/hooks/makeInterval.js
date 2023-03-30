
export const makeInterval = (callback, delay) => {
    const timer = () => setInterval(callback, delay)
    const clear = () => clearInterval(timer)
    return [timer, clear] 
}