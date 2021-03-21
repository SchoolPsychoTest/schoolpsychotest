$('#get-result').click(function(){
    var answers = [];
    for(let i=0;i<13;i++){
        let question = document.getElementsByName('a'+i);
        for (let ans of question) {
            if (ans.checked){
                answers.push(ans);
                break;
            }
        }
        if(!answers[i]){
            document.getElementById('result').innerHTML='<p style="color: red">Даны не все ответы!</p>';
            break;
        }
    }
    if(answers.length == 13){
        document.getElementById('result').innerHTML='';
        console.log(answers);
    }
})
