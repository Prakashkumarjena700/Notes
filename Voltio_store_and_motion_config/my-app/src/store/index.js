import { proxy } from 'valtio'


const store = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture:true,
    isFullTexture:false
})

export default store;