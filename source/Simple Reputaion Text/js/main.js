//declare variable
var Min_N,Max_N,Text_input,result,Fakecount,corection;

function genRep(){
  document.getElementById('result-area').innerHTML = "";

  Fakecount = "";

  Min_N = document.getElementById('min').value;
  Min_N = Math.floor(Min_N);

  Max_N = document.getElementById('max').value;
  Max_N = Math.floor(Max_N);

  Text_input = document.getElementById('text-area').value;

  Fakecount = new Array(Max_N-Min_N);
  corection = Text_input.search('[*]');

    //if(corection >= 0){
        for(a = 0; a < Fakecount.length+1 ; a++){


            result = Text_input.replace(/0/g, "");
            result = Text_input.replace(/[*]/g, a);
            document.getElementById('result-area').innerHTML += result + "&#010";





    //    }


    }
}
