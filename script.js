//  code for previewing small image on previewing pane
 var PreviewImg = document.getElementById('PreviewImg');
        var psmallimg = document.getElementsByClassName('psmallimg');

        psmallimg[0].onclick = function(){
            PreviewImg.src = psmallimg[0].src;
        }
        psmallimg[1].onclick = function(){
            PreviewImg.src = psmallimg[1].src;
        }
        psmallimg[2].onclick = function(){
            PreviewImg.src = psmallimg[2].src;
        }
        psmallimg[3].onclick = function(){
            PreviewImg.src = psmallimg[3].src;
        }
        psmallimg[4].onclick = function(){
            PreviewImg.src = psmallimg[4].src;
        }
        psmallimg[5].onclick = function(){
            PreviewImg.src = psmallimg[5].src;
        }
        psmallimg[6].onclick = function(){
            PreviewImg.src = psmallimg[6].src;
        }
        psmallimg[7].onclick = function(){
            PreviewImg.src = psmallimg[7].src;
        }
        
// code for the product image slider
    var psliderbtn = document.getElementsByClassName('product-slider__btn');
	var q = 0;
	psliderbtn[1].onclick = ()=>{
		q++;
		for(var i of psmallimg)
		{
			if (q==0) {i.style.left = "0px";}
			if (q==1) {i.style.left = "-150px";}
			if (q==2) {i.style.left = "-300px";}
			if (q==3) {i.style.left = "-450px";}
			if (q==4) {i.style.left = "-600px";}
        	if (q==5) {i.style.left = "-750px";}
            if (q==6) {i.style.left = "-900px";}
        	if (q==7) {i.style.left = "-1050px";}
        	if (q==8) {i.style.left = "-1200px";}
        	
        	


			if (q>6) {q=6;}
		}
	}
	psliderbtn[0].onclick = ()=>{
		q--; 
		for(var i of psmallimg)
		{	
			if (q==0) {i.style.left = "0px";}
			if (q==1) {i.style.left = "-150px";}
			if (q==2) {i.style.left = "-300px";}
			if (q==3) {i.style.left = "-450px";}
            if (q==4) {i.style.left = "-600px";}
        	if (q==5) {i.style.left = "-750px";}
            if (q==6) {i.style.left = "-900px";}
        	if (q==7) {i.style.left = "-1050px";}
        	if (q==8) {i.style.left = "-1200px";}
        	
			if (q < 0) {q=0;}
		}
	}

    //code for image magnifier
    //code not written for image magnifier
