const colors = ['rgb(255, 154, 162)', 'rgb(255, 184, 179)', ' rgb(255, 218, 193)','rgb(181, 234, 215)','rgb(199, 206, 234)']
const wrapper = document.querySelector('.wrapper');
const wrapperStyles = window.getComputedStyle(wrapper);
const button = document.querySelector('.container a')
const colorname = document.querySelector('.colorname')

const colorPicker = (arr)=>{
    const ranInd = Math.floor(Math.random() * arr.length )

    let ChoosenColor = arr[ranInd];
    return ChoosenColor;
}


button.addEventListener('click', e=>{
    console.log('I am clikced!');
    let color = colorPicker(colors);
    
    if (wrapperStyles.backgroundColor === color){
        color = colorPicker(colors);
        colorname.textContent = color;
        wrapper.style.backgroundColor = color;
    }else{
        colorname.textContent = color;
        wrapper.style.backgroundColor = color;
    }
    

})