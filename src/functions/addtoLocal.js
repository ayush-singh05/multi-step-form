export const addToLocal = (newVal) => {
    const value = localStorage.getItem('value');
        if(value){
         localStorage.removeItem('value')
        }
        localStorage.setItem('value',JSON.stringify(newVal))
    
}