<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<link rel="stylesheet" href="style.css">

</head>
<body>

<div id="all_pro_page">


                    <div class="a">
                      <div>
                        <div class="slideshow-container">

                          <div class="mySlidesH1 fade">
                            <div class="numbertext">1</div>
                            <img src="H1B.jpeg" alt="h1">
                            <div class="text">Sample 1</div>
                          </div>
                          
                          <div class="mySlidesH1 fade">
                            <div class="numbertext">2</div>
                            <img src="H1C.jpeg" alt="h1">
                            <div class="text">sample 2</div>
                          </div>
                          
                          <div class="mySlidesH1 fade">
                            <div class="numbertext">3</div>
                            <img src="H1A.jpeg" alt="h1">
                            <div class="text">Sample 3</div>
                          </div>
              
                          <div class="mySlidesH1 fade">
                              <div class="numbertext">4</div>
                              <img src="H1D.jpeg" alt="h1">
                              <div class="text">Sample 4</div>
                            </div>
                          
                            <div class="mySlidesH1 fade">
                              <div class="numbertext">5</div>
                              <img src="H1E.jpeg" alt="h1">
                              <div class="text">Sample 5</div>
                            </div>
                          </div>
                          <div style="text-align:center">
                              <span class="dotH1"></span> 
                              <span class="dotH1"></span> 
                              <span class="dotH1"></span> 
                              <span class="dotH1"></span> 
                              <span class="dotH1"></span>
                            </div>
                      </div>

                      <!-- PRODCT INFORMATION -->
                      <DIV class="PRODCT_INFORMATION">
                      <P><S class="M_price">180 RS </S>= 119 RS</P>
                    
                   <button class="btn" value="119" name="1234567">
                    single bed 1 bedsheet + 1 pillow cover__
                    <br>
                    (1 PIECE = 119 RS )__
                    <br>
                    (1 PIECES COMBO = 119 RS)
                  </button>     
                </DIV>


                <DIV class="PRODCT_INFORMATION">
                  <P><S class="M_price">350 RS </S>= 269 RS</P>
                
               <button class="btn" value="269">
              duble bed 1 bedsheet + 2 pillow cover__
              <br>
                (1 PIECE = 269 RS )__
                <br>
              (1 PIECES COMBO = 269 RS)
              </button> 
                    
            </DIV>
                  </div>
                    





                  <div class="a">
                    <div>
                      <img src="H2.jpeg" alt="H2">
                    </div>
                    <!-- PRODCT INFORMATION -->
                    <DIV class="PRODCT_INFORMATION">
                    <P><S class="M_price">80 RS</S> = 34 RS</P>
                  
                 <button class="btn" value="78">
                  Door Mat ( 2 pieces Combo )__
                  <br>
                  (1 PIECE = 34 RS )__
                  <br>
                  (2 PIECES COMBO = 78 RS)
                </button>     
                </DIV>
                
                
                
                </div>



                <div class="a">

                  <div>
                    <img src="H3.jpg" alt="H3">
                  </div>

                  <!-- PRODCT INFORMATION -->
                  <DIV class="PRODCT_INFORMATION">
                  <P><S class="M_price">20 RS</S> = 15 RS</P>
                
               <button class="btn" value="40">
                Chapati / kitchen  Napkins__
                <br>
                (1 PIECE = 15 RS )__
                <br>
                (5 PIECES COMBO = 40 RS)
              </button>     
              </DIV>
              </div>





              <div class="a">

                <div>
                  <img src="H5.jpg" alt="H5">
                </div>
                <!-- PRODCT INFORMATION -->
                <DIV class="PRODCT_INFORMATION">
                <P><S class="M_price">20 RS</S> = 10 RS</P>
              
             <button class="btn" value="50">
              Small Napkins__
              <br>
              (1 PIECE = 10 RS )__
              <br>
              (5 PIECES COMBO = 50 RS)
            </button>     
            </DIV>
            </div>












              <div class="a">

                <div>
                  <img src="H6.jpg" alt="H6">
                </div>
                <!-- PRODCT INFORMATION -->
                <DIV class="PRODCT_INFORMATION">
                <P><S class="M_price">30 RS</S> = 13 RS</P>
              
             <button class="btn" value="65" >
              big Napkins__
              <br>
              (1 PIECE = 13 RS )__
              <br>
              (5 PIECES COMBO = 65 RS)
            </button>     
            </DIV>
            </div>

 </div>



<!-- JS PART OF PAY PAGE -->
<div>

  <div class="opacity_0">

    <div id="pree_id"></div>
    <div id="last_id"></div>
    <div id="final_id"></div>
    <DIV id="today_date"></DIV>
    <div id="order_del_date"></div>
    <div id="product_price_result"></div>
    <div id="product_col">123</div>
  </div>

<div id="pp_div_1">


  <div class="product_name_col" id="product_name_result"></div>

  <P>Select product quantity :-
    <select name="" id="product-quntity">
        <option value="1">1 SET</option>
        <option value="2">2 SET</option>
        <option value="3">3 SET</option>
    </select>
  <p>नाव :- <input id="name_result" type="text"></p>

  <p  >गाव निवडा :- 
    <select name=""  id="addres_result">
    <option value="rahimatpur">Rahimatpur</option>
    <option value="boriv">Boriv</option>
    <option value="Naharwadi">Naharwadi</option>
    <option value="Other">Other</option>
    </select>

   <p >संपूर्ण पत्ता लिहा :- 
   <input id="address_full_result" type="text">
   </p>

   <p id="mobnopara">व्हॉट्सॲप मोबाईल नंबर :- <input id="mobno_result" type="number"></p></p>
  
   <p>वरील मोबाईल नंबर पुन्हा लिहा:- 
    <button id="mobbtn">
     <input id="mobnover_result" type="number">
   </button>
  </p>
<BR></BR>
  <button  class="button" id="secA_btn">view order summary</summary></button>



</div>

<div id="pp_div_2">
<div id="L&j&p_DIV">
      
    <div id="LEGGINS">
    <div class="heding">select your leggins colour</div>
    <BR>
      <img src="colour_leggins.png" alt="">
<DIV id="L_1">Select 1st leegins  colour</DIV>
<select id="leggise_1">
       <option value="">BLACK colour</option>
      <option value="">WHITE  colour</option>
  
      <option value="">RED  colour</option>
      <option value="">dark RED colour</option>
  
       
      <option value="">NAVY BLUE colour</option>
      <option value="">ORANGE colour</option>
  
      <option value="">GREEN colour</option>
      <option value="">SKIN colour</option>
  
      <option value="">PINK  colour</option>
      <option value="">dark PINK colour</option>
  
      <option value="">BLUE colour</option>
      <option value="">dark BLUE colour</option>
  
      <option value="">CREAM colour</option>
      <option value="">dark CREAM colour</option>
  
      <option value="">SKY BLUE colour</option>
      <option value="">dark SKY BLUE colour</option>
  
      
      <option value="">YELLOW colour</option>
      <option value="">MARRON colour</option>
   
</select>
<div id="L_2">Select 2nd leggins colour</div>
<select id="leggise_2">
       <option value="">BLACK colour</option>
      <option value="">WHITE  colour</option>
  
      <option value="">RED  colour</option>
      <option value="">dark RED colour</option>
  
       
      <option value="">NAVY BLUE colour</option>
      <option value="">ORANGE colour</option>
  
      <option value="">GREEN colour</option>
      <option value="">SKIN colour</option>
  
      <option value="">PINK  colour</option>
      <option value="">dark PINK colour</option>
  
      <option value="">BLUE colour</option>
      <option value="">dark BLUE colour</option>
  
      <option value="">CREAM colour</option>
      <option value="">dark CREAM colour</option>
  
      <option value="">SKY BLUE colour</option>
      <option value="">dark SKY BLUE colour</option>
  
      
      <option value="">YELLOW colour</option>
      <option value="">MARRON colour</option>
   
</select>
<div id="L_3">आमची टीम तुमच्या निवडलेला कलर देण्याचा 100% प्रयत्न करेल पण जर स्टोरेज मध्ये वरील 2 कलर नसतील तर तुम्ही कोणता कॉलवर घेऊ इच्छिता.</div>
<select id="leggise_3">
  <option value="">BLACK colour</option>
 <option value="">WHITE  colour</option>

 <option value="">RED  colour</option>
 <option value="">dark RED colour</option>

  
 <option value="">NAVY BLUE colour</option>
 <option value="">ORANGE colour</option>

 <option value="">GREEN colour</option>
 <option value="">SKIN colour</option>

 <option value="">PINK  colour</option>
 <option value="">dark PINK colour</option>

 <option value="">BLUE colour</option>
 <option value="">dark BLUE colour</option>

 <option value="">CREAM colour</option>
 <option value="">dark CREAM colour</option>

 <option value="">SKY BLUE colour</option>
 <option value="">dark SKY BLUE colour</option>

 
 <option value="">YELLOW colour</option>
 <option value="">MARRON colour</option>

</select>

    </div>

    <div id="JEANS">
  <div class="heding">select your jeans colour</div>
  <br>
<div id="J_1">Select 1st jeans colour</div>
<select name="" id="jeans_1">
             <option value="">blue</option>
             <option value="">grey</option>
             <option value="">black</option>
           
</select>

<div id="J_2">Select 2nd jeans colour</div>  
<select name="" id="jeans_2">
  <option value="">blue</option>
  <option value="">grey</option>
  <option value="">black</option>
</select>

<div id="J_3">आमची टीम तुमच्या निवडलेला कलर देण्याचा 100% प्रयत्न करेल पण जर स्टोरेज मध्ये वरील 2 कलर नसतील तर तुम्ही कोणता कॉलवर घेऊ इच्छिता.</div>
<select name="" id="jeans_3">
             <option value="">blue</option>
             <option value="">grey</option>
             <option value="">black</option>

</select>
    </div>

    <div id="Petticoat">
      <div class="heding">select your Petticoat colour</div>
      <BR>
          <img src="colour_petticote.png" alt="Petticoat_1_colour">
  <DIV id="P_1">Select 1st Petticoat colour</DIV>


  <select id="Petticoat_1">
         <option value="">BLACK colour</option>
        <option value="">WHITE  colour</option>
        <option value="">RED  colour</option>
        <option value="">NAVY BLUE colour</option>

        <option value="">ORANGE colour</option>
        <option value="">GREEN colour</option>
        <option value="">SKIN colour</option>
        <option value="">PINK  colour</option>

    
        <option value="">BLUE colour</option>
        <option value="">CREAM colour</option>              
        <option value="">SKY BLUE colour</option>                  
        <option value="">YELLOW colour</option>
        <option value="">MARRON colour</option>
     
  </select>
  <div id="P_2">Select 2nd Petticoat colour</div>
  <select id="Petticoat_2">
      <option value="">BLACK colour</option>
      <option value="">WHITE  colour</option>
      <option value="">RED  colour</option>
      <option value="">NAVY BLUE colour</option>

      <option value="">ORANGE colour</option>
      <option value="">GREEN colour</option>
      <option value="">SKIN colour</option>
      <option value="">PINK  colour</option>

  
      <option value="">BLUE colour</option>
      <option value="">CREAM colour</option>              
      <option value="">SKY BLUE colour</option>                  
      <option value="">YELLOW colour</option>
      <option value="">MARRON colour</option>
     
  </select>
  <div id="P_3">आमची टीम तुम्ही निवडलेला कलर देण्याचा 100% प्रयत्न करेल पण जर स्टोरेज मध्ये वरील 2 कलर नसतील तर तुम्ही कोणता कॉलवर घेऊ इच्छिता.</div>
  <select id="Petticoat_3">
      <option value="">BLACK colour</option>
      <option value="">WHITE  colour</option>
      <option value="">RED  colour</option>
      <option value="">NAVY BLUE colour</option>

      <option value="">ORANGE colour</option>
      <option value="">GREEN colour</option>
      <option value="">SKIN colour</option>
      <option value="">PINK  colour</option>

  
      <option value="">BLUE colour</option>
      <option value="">CREAM colour</option>              
      <option value="">SKY BLUE colour</option>                  
      <option value="">YELLOW colour</option>
      <option value="">MARRON colour</option>
  
  </select>
  
      </div>
 </div>

  <div id="name_and_address_sumury"></div>
  <br>
  <div id="colour_last_div">
    <div id="col_last_1"></div>
    <div id="col_last_2"></div>
    <div id="col_last_3"></div>
   </div>



  <div id="final_bill_div">
<div  id="final_bill"></div>
<br>
<div id="finanl_amount"></div>
</BR>
</div>

<DIV id="Payment_gatway1"></DIV>
</BR>
<img id="qr_img" src="qr.jpg" alt="qr.jpg">
</BR>
<DIV id="Payment_gatway2"></DIV>
</BR>
<div id="id_input" >Enter UPI transactiion id last 4 digit
  <input  id="transaction_id" value="" type="number">
 </div>
 <br>



</BR>
<div>तुम्ही 20% ची बचत केली त्याबद्दल अभिनंदन. </BR>
  पेमेंट झाल्या नंतर -Submit- या बटन वर क्लिक करा.</BR>
  क्लिक केल्या नंतर  तुम्ही  व्हाट्सअप मध्ये जाल.</BR>
 व्हाट्सअप मध्ये SEND SMS करा तुम्हाला व्हाट्सअप वर तुम्हाला तुमचा 1 ऑर्डर आयडी भेटेल.</BR>
 आयडी भेटल्या नंतर तुमची ऑर्डर आमच्या टीम ला भेटेल.
 ऑर्डर ची माहिती तपासून आमची टीम तुम्हाला ऑर्डर कन्फर्म असा SMS करेल आणि तुमची आर्डर कन्फर्म होईल.नंतर
 आमची टीम तुमची ऑर्डर तुम्हाला लवकरच पाठवेल.
<div id="chak_mark"></div></div>

 <button class="button" id="gotowhatsapp">-Submit-</button>
</div>

</div>



        <script>

            
            
            var slideH1Index = 0;
            showSlidesH1();
            
            function showSlidesH1() {
              let i;
              let slidesH1 = document.getElementsByClassName("mySlidesH1");
              let dotsH1 = document.getElementsByClassName("dotH1");
              for (i = 0; i < slidesH1.length; i++) {
                slidesH1[i].style.display = "none";  
              }
              slideH1Index++;
              if (slideH1Index > slidesH1.length) {slideH1Index = 1}    
              for (i = 0; i < dotsH1.length; i++) {
                dotsH1[i].className = dotsH1[i].className.replace(" active", "");
              }
              slidesH1[slideH1Index-1].style.display = "block";  
              dotsH1[slideH1Index-1].className += " active";
              setTimeout(showSlidesH1, 2000); // Change image every 2 seconds
            }
                </script>



<script src="script.js"></script>
</body>
</html>
