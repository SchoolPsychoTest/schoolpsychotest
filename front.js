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
        document.getElementById('result').innerHTML='<canvas id="marksChart" width="600" height="400"></canvas>';
        console.log(answers);
		var diaData = {critical:0, creative:0, communicative:0, cooperative:0};
		for(let i=1; i<13; i++){
			let ans_obj = JSON.parse(answers[i].value);
			diaData.critical += Number(ans_obj.critical);
			diaData.creative += Number(ans_obj.creative);
			diaData.communicative += Number(ans_obj.communicative);
			diaData.cooperative += Number(ans_obj.cooperative);
		}

		console.log(diaData);
        var marksCanvas = document.getElementById("marksChart");

		var marksData = {
		labels: ["Критическое мышление", "Креативное мышление", "Коммуникация", "Кооперация"],
		datasets: [{
			label: answers[0].value,
			backgroundColor: "rgba(200,0,0,0.2)",
			data: [diaData.critical, diaData.creative, diaData.communicative, diaData.cooperative]
		}, {
			label: "0000",
			backgroundColor: "rgba(0,0,200,0.2)",
			data: [0, 0, 0, 0]
		}]
		};

		var radarChart = new Chart(marksCanvas, {
		type: 'radar',
		data: marksData
		});
    }
})
