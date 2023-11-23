// footerAlign.js
let num1Clicked = 0;
let num2Clicked = 0;

function handleClick(pictureId) {
    if (pictureId === 'firstPicture') {
        if (num1Clicked <=2) {
            num1Clicked ++;

        } else {
			num1Clicked = 0;
        }
    } else if (pictureId === 'secondPicture' && num1Clicked === 2) {
		if (num2Clicked <2) {
            num2Clicked ++;

        } else if (num2Clicked ==2) {
			window.location.href = "A2%25asd3DASW%23awasdeasteregg.html";
        }
		else {
			num2Clicked == 0;
		}
        
    }
    console.log(num1Clicked);
	console.log(num2Clicked);
}
