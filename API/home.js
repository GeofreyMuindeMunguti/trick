
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('id', 'pdf');


app.appendChild(container);

 
 var vval;
 var weblink;
  
  //console.log(weblink);
        
function load(event){
//create a request variable and assign a new XMLHttpREquest
 var request = new XMLHttpRequest();
 console.log("x")
 var website = document.getElementById('usr').value;
 weblink = website;
console.log(weblink);



     var url = "https://api.similarweb.com/v1/website/"+website+"/total-traffic-and-engagement/visits?api_key=3bd3146579414adaa2b66da1004f393a&start_date=2018-08&end_date=2018-09&main_domain_only=false&granularity=monthly"

     console.log(url);

var key ="63f08154e60841c2bc8639e06f5681ea";
 request.open('GET',url,true); 
 request.setRequestHeader("Access-Control-Allow-Origin", "*");
 request.setRequestHeader("Access-Control-Allow-Methods", 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
 request.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
 
     
request.onload = function()
{      
	console.log("x")
	//access JSON data
	var data =JSON.parse(this.response);
     console.log(data);
	if(request.status>=200 && request.status< 400)
	{
		var domain = data.meta.request.domain
		console.log(domain)

		const websiten = document.createElement('h2');
		websiten.setAttribute('class','card2');
		websiten.textContent = domain;
         
          
        container.appendChild(websiten);
       
		data.visits.forEach(movie=>{
			var m = movie.date;
			console.log(m);

			var prod = movie.visits;
			console.log(prod);
			prodf = Math.round(prod);
           vval = prodf;
			var scr = movie.rt_score;
			console.log(scr);

			var status = document.createElement("p");

			if (prod<5000) 
			{
				console.log("within sweet spot");
				 
				status.textContent="Within sweet spot";
				 
			}
			else
				{
					console.log("Not")
				}

			const card = document.createElement('div');
			card.setAttribute('class','card');

			const h1 = document.createElement('h1');
			h1.textContent = m;


			const p = document.createElement('p');
			p.textContent = prodf;

			const h2 = document.createElement('h2');
			h2.textContent = scr;

			const date = document.createElement('h3');
			date.textContent='UpTo :'

			const vt = document.createElement('p');
			vt.textContent ='visits:';

			 
 

			container.appendChild(card);
			//container.appendChild(status);
			card.appendChild(date);
			card.appendChild(h1);
			card.appendChild(vt);
			card.appendChild(p);
			 
			card.appendChild(h2);
			 
			 
			 

            
         


		});

	}else{
		console.log('error');
		const errorMEssage = document.createElement('marquee');
		errorMEssage.textContent='error occured';
		app.appendChild(errorMEssage);
	}
}
// console.log("x")
request.send();
 
}

 
function post(data)
{
	    //window.location="postdb.php";
	    // var todb = new XMLHttpRequest();
     //        var method = "POST";
     //        var url = "postdb.php";
     //        var asynchronous = true;
            

     //        todb.open(method , url , asynchronous);

     //        todb.send(data);

     //        todb.onreadystatechange = function()
     //        {
     //        	if(this.readyState == 4 && this.status == 200)
     //        	{
     //        		alert(this.responseText);
     //        	}
     //        }

     var visits = vval;
     var link = weblink;

     $.post('postdb.php', {postvisits: visits, postlink: link}, function(data){

     	$('#result').html(data);
     });

     
      alert("Data on "+weblink+" Sent to database");
     
    



}
 

  