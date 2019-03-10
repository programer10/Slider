
            var slider = document.getElementById('main-wrapper');
            var image1 = ['image1', 'image2', 'image3', 'image4', 'image5'];
            var image2 =  ['image6', 'image7', 'image8', 'image9'];
            var imageSrc1 = ['img/slider-image-7.jpg', 'img/slider-image-6.jpg', 'img/slider-image-9.jpg', 'img/slider-image-8.jpg', 'img/slider-image-5.jpg'];
            var imageSrc2 = ['img/slider-image-4.jpg', 'img/slider-image-1.jpg', 'img/slider-image-2.jpg', 'img/slider-image-3.jpg'];
            
            var i = 1;
            var j = 0;
            var flag = "";

            function nextImage(){
                if(flag == "" || flag == "previous") {
                    flag = "next";
                } else if(i < image1.length && flag != "" && flag != "previous"){
                    i = i + 1;
                } else if(i >= image1.length && flag != "" && flag != "previous") {
                    i = 1;
                }
                
                if(flag == "" || flag == "previous") {
                    flag = "next";
                } else if(j < image2.length && flag != "" && flag != "previous"){
                    j = j + 1;
                } else if(j >= image2.length && flag != "" && flag != "previous"){
                    j = 1;
                }
                
                if(i == 1){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[3]);  
                } else if(i == 2){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[2]);  
                } else if (i == 3){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[1]);  
                } else if (i == 4) {
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[0]);  
                } else if(i == 5){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[4]);
                }
                
                if(j == 1){
                    console.log("j: " + j);
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[3]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[0]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[1]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[2]);

                } else if(j == 2){
                    console.log("j: " + j);;
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[2]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[3]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[0]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[1]);
                } else if (j == 3){
                    console.log("j: " + j);
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[1]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[2]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[3]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[0]);
                } else if (j == 4) {
                    console.log("j: " + j);
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[0]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[1]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[2]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[3]);
                }
            }

            function prevImage(){
                
                if(flag == "" || flag == "next") {
                    flag = "previous";
                } else if(i < image1.length && flag != "" && flag != "next"){
                    i = i + 1;
                } else if(i >= image1.length && flag != "" && flag != "next"){
                    i = 1;
                }
                 if(flag == "" || flag == "next") {
                    flag = "previous";
                } else if(j < image2.length && flag != "" && flag != "next"){
                    j = j + 1;
                } else if(j >= image2.length && flag != "" && flag != "next"){
                    j = 1;
                } 
                
                if(i == 1){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[0]); 
                } else if(i == 2){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[1]);    
                } else if (i == 3){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[2]);  
                } else if (i == 4) {
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[4]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[3]); 
                } else if(i==5){
                    console.log("i: " + i);
                    document.getElementById(image1[0]).setAttribute("src", imageSrc1[0]);
                    document.getElementById(image1[1]).setAttribute("src", imageSrc1[1]);
                    document.getElementById(image1[2]).setAttribute("src", imageSrc1[2]);
                    document.getElementById(image1[3]).setAttribute("src", imageSrc1[3]);
                    document.getElementById(image1[4]).setAttribute("src", imageSrc1[4]);
                } 
                
                if(j == 1){
                    console.log("j: "  + j);
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[1]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[2]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[3]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[0]);

                } else if(j == 2){
                    console.log("j: " + j);
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[2]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[3]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[0]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[1]);
                } else if (j == 3){
                    console.log("j: " + j);
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[3]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[0]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[1]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[2]);
                } else if (j == 4) {
                    console.log("j: " + j);
                    document.getElementById(image2[0]).setAttribute("src", imageSrc2[0]);
                    document.getElementById(image2[1]).setAttribute("src", imageSrc2[1]);
                    document.getElementById(image2[2]).setAttribute("src", imageSrc2[2]);
                    document.getElementById(image2[3]).setAttribute("src", imageSrc2[3]);
                }
            }
            
            