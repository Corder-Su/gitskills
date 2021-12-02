let bug = new Promise(resolve => {
    setTimeout( _ => {
        resolve('bug001 fixed');
    },2000)
})