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
        psmallimg[8].onclick = function(){
            PreviewImg.src = psmallimg[8].src;
        }
        psmallimg[9].onclick = function(){
            PreviewImg.src = psmallimg[9].src;
        }
        psmallimg[10].onclick = function(){
            PreviewImg.src = psmallimg[9].src;
        }

        // code for the slider
        const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})