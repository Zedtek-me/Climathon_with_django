const handleAUth= async (e)=>{
    let flash= document.querySelector('.flash')
    e.preventDefault()
    if (e.target.id === 'loginForm'){
        let dataForm= new FormData(e.target)
        let resp= await fetch('https://climeherkzherokuapp.com/login', {
            method:'POST',
            body:JSON.stringify(dataForm)
        })
        let data = await resp.json()
        if (data.status_code ==='200'){
            // successful login
            flash.textContent= 'Login Successful'
            flash.style.display = 'flex';
            flash.style.backgroundColor= 'lightgreen'
            
            let sendSignupHeader =await fetch('dashboard/', {// sends the signup status to the backend to let it confirm, before redirecting to the actual page
                method:'POST',
                headers:{
                    'user_logged_in':'user is logged in'
                }
            })
        
            setTimeout(()=>window.location.pathname='dashboard/', 2000)//directs to dashboard
        }
        else{
            flash.textContent= 'Invalid login credentials!'
            flash.style.display = 'flex';
            flash.style.backgroundColor= 'red'
        }
    }

    else{//fetches the signup page
        let dataForm= new FormData(e.target)
        console.log(dataForm)
        let resp= await fetch('https://climeherkzherokuapp.com/login', {
            method:'POST',
            body:JSON.stringify(dataForm)
        })
        let data = await data.json()
        if (data.status_code ==='200'){
            // successful login
            flash.textContent= 'Sign up Successful'
            flash.style.display = 'flex';
            flash.style.backgroundColor= 'lightgreen'

            setTimeout(()=>window.location.pathname='login/', 2000)//directs to dashboard
        }
        else{
            flash.textContent= 'Unsuccessful sign up. Something went wrong! Try cross-checking and try again.'
            flash.style.display = 'flex';
            flash.style.backgroundColor= 'red'
        }
    }
}


const fetchGridData= async(url)=>{
    document.querySelector('.enterPrise-stat')
    let resp= await fetch(url)
    let data = await resp.json()
    data.map((grid)=>{
        let enterPrices= document.createElement('DIV')
        let par= document.createElement('P')
        let img= document.createElement('IMG')
        // set some attributes on them
        enterPrices.className= 'card'
        par.id= 'gridInfo'
        img.id= 'enterPImg'
        // add their data
        par.textContent= grid.location
        img.src= grid.image
        enterPrices.appendChild(img)
        enterPrices.appendChild(par)
    })
}