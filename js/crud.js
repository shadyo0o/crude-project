



let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
let search=document.getElementById('search');
let searchTitle=document.getElementById('searchTitle');
let searchCategory=document.getElementById('searchCategory');

let mood='create'
let tmp;

let data ;

if(localStorage.getItem('product')!= null){
    data=JSON.parse(localStorage.getItem('product'))
}else {
    data=[]
}

function showData(){
    // console.log('hello');
    

    let newPro={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),

    }

    if(title.value!=''
        &&price.value!=''
        &&category.value!=''){
            
            if(mood==='create'){
                if(newPro.count>1){
                    for (let i = 1; i < newPro.count; i++) {
                        data.push({...newPro});
                        
                    }
                }else{
                    data.push(newPro);
                }
            
            }else{
                data[tmp]=newPro
                mood='create'
                submit.innerHTML='Create'
                count.style.display="block"
                
                
            }



        }else{
            alert('Please fill all fields')



            
        }




    data.push(newPro);
    localStorage.setItem('product', JSON.stringify(data)    )
    displayProduct()
    clearData()
    getTotal()

}


function getTotal(){
    if(price.value != ''){
        total.innerHTML=(+price.value + +ads.value + +taxes.value)- +discount.value
        total.style.background='green'
    }else{
        total.innerHTML='';
        total.style.background='#ef4444'
    }
    
}


function displayProduct(){
    
    let cartona=``;
    for(let i =0 ; i<data.length ; i++ ){
        cartona += `
        <tr class="my-11">
                            <td>${i +1}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].taxes}</td>
                    <td>${data[i].ads}</td>
                    <td>${data[i].discount}</td>
                    <td>${data[i].total}</td>
                    <td>${data[i].count}</td>
                    <td>${data[i].category}</td>
                    <td> 
                    <button onclick='updateData(${i})' id="update" class="bg-green-500 hover:bg-green-900  p-2  font-bold  rounded-lg text-black hover:tracking-widest transition-all duration-500 focus:text-white focus:bg-green-950 ">Update</button>
                    </td>
                    <td> 
                        <button onclick="deleteData(${i})" id="delete" class="bg-green-500 hover:bg-green-900  p-2  font-bold  rounded-lg text-black hover:tracking-widest transition-all duration-500 focus:text-white focus:bg-green-950 ">Delete</button>
                        </td>
                        </tr>
        `
    }
    document.getElementById('tbody').innerHTML= cartona
    if(data.length > 0){
        document.getElementById('clear').innerHTML= `        <button id="clear" onclick='clearAll()' class= "w-full bg-green-500 hover:bg-green-900  p-2 text-xl font-bold  rounded-lg text-black hover:tracking-widest transition-all duration-500 focus:text-white focus:bg-green-950 my-4">Clear All</button>
`
    }else{
        document.getElementById('clear').innerHTML=''
    }

}
displayProduct()

function clearData(){
    title.value=''
    price.value=''
    taxes.value=''
    ads.value=''
    discount.value=''
    total.innerHTML=''
    count.value=''
    category.value=''

}

function deleteData(i){
    data.splice(i,1)
    localStorage.setItem('product', JSON.stringify(data)    )
    displayProduct()

}

function clearAll(){
    data.splice(0)
    // localStorage.setItem('product', JSON.stringify(data)    )
    localStorage.clear()
    displayProduct()
    
}


function updateData(i){
    mood='update'
    tmp=i
    title.value=data[i].title
    price.value=data[i].price
    taxes.value=data[i].taxes
    ads.value=data[i].ads
    discount.value=data[i].discount
    getTotal()
    category.value=data[i].category
    count.style.display='none'
    submit.innerHTML='Update'
    scroll({
        top: 0,
        behavior: 'smooth'
    })
    
    
}

let searchMood='Title'


function getSearchMood(id){
    let search=document.getElementById("search")
    if (id=='searchTitle'){
        searchMood='Title'
        


    }else{
        searchMood='Category'
        

    }
    search.placeholder=('Search By '+searchMood)
    search.focus()
    search.value=''
    displayProduct()
}

function searchItem(value){
    let search=document.getElementById("search")
    let cartona=''
    for(let i =0; i< data.length;i++){
    if (searchMood =="title"){
        
            if(data[i].title.toLowerCase().includes(value)){
                cartona += `
        <tr class="my-11">
                            <td>${i +1}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].taxes}</td>
                    <td>${data[i].ads}</td>
                    <td>${data[i].discount}</td>
                    <td>${data[i].total}</td>
                    <td>${data[i].count}</td>
                    <td>${data[i].category}</td>
                    <td> 
                    <button onclick='updateData(${i})' id="update" class="bg-green-500 hover:bg-green-900  p-2  font-bold  rounded-lg text-black hover:tracking-widest transition-all duration-500 focus:text-white focus:bg-green-950 ">Update</button>
                    </td>
                    <td> 
                        <button onclick="deleteData(${i})" id="delete" class="bg-green-500 hover:bg-green-900  p-2  font-bold  rounded-lg text-black hover:tracking-widest transition-all duration-500 focus:text-white focus:bg-green-950 ">Delete</button>
                        </td>
                        </tr>
        `
            }
        
    }else{
    
            if(data[i].category.toLowerCase().includes(value)){
                cartona += `
        <tr class="my-11">
                            <td>${i +1}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].taxes}</td>
                    <td>${data[i].ads}</td>
                    <td>${data[i].discount}</td>
                    <td>${data[i].total}</td>
                    <td>${data[i].count}</td>
                    <td>${data[i].category}</td>
                    <td> 
                    <button onclick='updateData(${i})' id="update" class=" bg-green-500 hover:bg-green-900  p-2  font-bold  rounded-lg text-black hover:tracking-widest transition-all duration-500 focus:text-white focus:bg-green-950 ">Update</button>
                    </td>
                    <td> 
                        <button onclick="deleteData(${i})" id="delete" class="bg-green-500 hover:bg-green-900  p-2  font-bold  rounded-lg text-black hover:tracking-widest transition-all duration-500 focus:text-white focus:bg-green-950 ">Delete</button>
                        </td>
                        </tr>
        `}
    
}
    }
document.getElementById('tbody').innerHTML= cartona
}





















