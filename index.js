let url="http://universities.hipolabs.com/search?country=";
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    let state=document.querySelector("#state").value;
    console.log(country);
    let colArr=await getColleges(country,state);
    show(colArr);
});
function show(colArr){
    let list=document.querySelector("#list");
    list.innerText=" ";
    for(col of colArr){
        let li=document.createElement("li");
        li.innerText=col.domains;
        list.append(li);
        console.log(col);
    }
}

async function getColleges(country,state){
    try{
        let res=await axios.get(url+country);
        let result=res.data;
        if(state){
            result=result.filter(uni=>uni['state-province']&& uni['state-province'].toLowerCase()===state.toLowerCase()); 
        }
        return result;
    }catch(e){
        console.log("error : ",e);
        return [];
    }
}