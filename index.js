const calculateFormEl=document.getElementById("calculateForm");

const calculateMarks=(event)=>{
    const maxMarks=400;
    event.preventDefault();

    const formData=new FormData(calculateFormEl);
    const data={};
    formData.forEach((value,key)=>{
        data[key]=+value;
    })
    const resultEl=document.getElementById("result");
    const totalMarks=data.math+data.science+data.english+data.hindi;
    let percentage=parseFloat((totalMarks/maxMarks)*100).toFixed(1);
    resultEl.innerHTML=`You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`; 
    calculateFormEl.after(resultEl);   
    
};