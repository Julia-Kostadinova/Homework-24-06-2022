let counter = 0; 
let clientAnswerpans;
let clientAnswerpots;
let clientAnswerwide;
let clientAnswerlenght;
let clientAnswerhigh;
let clientAnswerchef;
let clientAnswercooker;
let clientAnswersause;
let clientAswerwaiter;
let clientAnswerminTemp;
let clientAnswermaxTemp;
let clientAswerbank;
let clientAnsweramount;
let clientAnswerturnover;
let clientAnsweropen;
let clientAnswerclose;
let clientOptionalAnswer;
let clientAnswerfrezeer;
let clientAnswerhotplate;
let clientAnsweroven;
let clientAnswergrill;
let clientAnsweraspirator;




while (counter < 15) 

{   clientAnswerpans = prompt(mandatoryKitchenQuestions.KITCHENPANS); 
    if(clientAnswerpans == "") { counter--; } 
    else { counter++; } 
    clientAnswerpots = prompt(mandatoryKitchenQuestions.KITCHENPOTS); 
    if(clientAnswerpots == "") { counter--; } 
    else { counter++; } 
    clientAnswerwide = prompt(mandatoryKitchenQuestions.KITCHENWIDESANTIMETERS); 
    if(clientAnswerwide == "") { counter--; } 
    else { counter++; } 
    clientAnswerlenght = prompt(mandatoryKitchenQuestions.KITCHENLENGHTSANTIMETERS); 
    if(clientAnswerlenght == "") { counter--; } 
    else { counter++; } 
    clientAnswerhigh = prompt(mandatoryKitchenQuestions.KITCHENHIGHSANTIMETERS); 
    if(clientAnswerhigh == "") { counter--; } 
    else { counter++; } 
    clientAnswerchef = prompt(mandatoryKitchenQuestions.KITCHENCHEFNAME); 
    if(clientAnswerchef == "") { counter--; } 
    else { counter++; } 
    clientAnswercooker=prompt(mandatoryKitchenQuestions.KITCHENCOOKERCOUNT);
    if(clientAnswercooker == "") { counter--; } 
    else { counter++; } 
    clientAnswersause = prompt(mandatoryKitchenQuestions.KITCHENSAUCEMANAGERNAME); 
    if(clientAnswersause == "") { counter--; } 
    else { counter++; } 
    clientAswerwaiter = prompt(mandatoryKitchenQuestions.RESTAURANTWAITERSCOUNT); 
    if(clientAswerwaiter == "") { counter--; } 
    else { counter++; } 
    clientAnswerminTemp = prompt(mandatoryKitchenQuestions.KITCHENMINTEMPERATURE); 
    if(clientAnswerminTemp == "") { counter--; } 
    else { counter++; } 
    clientAnswermaxTemp = prompt(mandatoryKitchenQuestions.KITCHENMAXTEMPERATURE); 
    if(clientAnswermaxTemp == "") { counter--; } 
    else { counter++; } 
    clientAswerbank = prompt(mandatoryKitchenQuestions.PERSONALBANKACCOUNTAMOUNT); 
    if(clientAswerbank == "") { counter--; } 
    else { counter++; } 
    clientAnswerturnover = prompt(mandatoryKitchenQuestions.RESTAURANTDAILYTURNOVERAMOUNT); 
    if(clientAnswerturnover == "") { counter--; } 
    else { counter++; } 
    clientAnsweropen = prompt(mandatoryKitchenQuestions.RESTAURANTOPENTIME); 
    if(clientAnsweropen == "") { counter--; } 
    else { counter++; } 
    clientAnswerclose = prompt(mandatoryKitchenQuestions.RESTAURANTCLOSETIME); 
    if(clientAnswerclose == "") { counter--; } 
    else { counter++; } 

    if(counter < 15){ alert(statusMessages.ENDAPP); } 
} 



if(counter == 15) 
{ clientOptionalAnswer = prompt("Имаме още няколко въпроса? Желаетe ли да отговорите? да/не"); 

if(clientOptionalAnswer == "да")
  { 
    clientAnswerfrezeer = prompt(optionalKitchenQuestions.KITCHENFREZEER); 
    clientAnswerhotplate = prompt(optionalKitchenQuestions.KITCHWNGAZHOTPLATE); 
    clientAnsweroven = prompt(optionalKitchenQuestions.KITCHENCOMBIOVEN); 
    clientAnswergrill = prompt(optionalKitchenQuestions.KITCHENELECTRICGRILL); 
    clientAnsweraspirator = prompt(optionalKitchenQuestions.KITCHENASPIRATOR);     
  }
    
} 

let clientMenusize ;
let clientMenupreparation;
let menuDish;
let clientMenuChoice;
let kitchenSquareMeter=clientAnswerwide*clientAnswerlenght*0.01;

let clientRaremenu = clientAnswerhotplate=="не"&&clientAnswergrill=="да"&&clientAnswerminTemp>=36
&&clientAnswermaxTemp<=48&&clientAnswerminTemp<=48&&clientAnswermaxTemp>=36&&clientAnsweraspirator=="да";
let clientMediummenu = clientAnswergrill== "да"||clientAnswercooker==5||clientAnswerchef=="Иван";
let clientWellmenu=(clientAnswerclose<=22||clientAnswersause=="Петър"||clientAnswersause=="Радо")&&(kitchenSquareMeter==45||clientAnswerpans==3||clientAnswerpots==2);

let clientTypeveg;
let clientVegmenu=clientAnsweroven=="не"||clientAnswergrill=="не"||clientAnsweraspirator=="не";
let clientVeganmenu=clientAnswerfrezeer=="да"&&clientAnswerchef=="Манол"&&clientAnswercooker>=3&&clientAnswercooker<11&&clientAswerwaiter!=7;
let clientAllsumBank=clientAnsweramount+clientAnswerturnover;
let kitchenCubicmeter=clientAnswerwide*clientAnswerlenght*clientAnswerhigh;
let clientPeskaterianskomenu=(clientAnswergrill=="да"||clientOptionalAnswer=="да")&&(kitchenCubicmeter<13||clientAllsumBank>158000);
let clientTypedessert;
let clientDessertanswer;


menuDish = prompt ("Изберете меню  - месно, вегитарианско ястие или десерт");

if (menuDish=="месно"){
 
clientMenusize=prompt 
(`Моля изберете колко грама да е порцията -
отбележете само номера на избраната от Вас порция 
1 ${restaurantMenuMeat.MENUMEATPORTIONSMALLGR}
2 ${restaurantMenuMeat.MENUMEATPORTIONMEDIUMGR}
3 ${restaurantMenuMeat.MENUMEATPORTIONLARGEGR}`);

clientMenupreparation=prompt
(`Моля изберете начин на приготвяне - 
отбележете само номера на избраната от Вас порция
1 ${restaurantMenuMeat.MENUMEATPREPARATIONRARE}
2 ${restaurantMenuMeat.MENUMEATPREPARATIONMEDIUM}
3 ${restaurantMenuMeat.MENUMEATPREPARATIONWELLDONE}  `)



if  (clientMenusize=="1"&&clientMenupreparation=="1")
{
  if(clientRaremenu)
  {
    alert ("Вашата поръчка е изпълнена успешно Благодаря ви, че хапнахте при нас")
  }  

else {
  alert ("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. ");
}
}

if  (clientMenupreparation=="2"||clientMenusize=="2")
{
if(clientMediummenu)
  {
    alert ("Вашата поръчка е изпълнена успешно Благодаря ви, че хапнахте при нас")
  }  

else {
  alert ("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. ");
}
}

if  (clientMenupreparation=="3")
{
if(clientWellmenu)
  {
    alert ("Вашата поръчка е изпълнена успешно Благодаря ви, че хапнахте при нас")
  }  

else {
  alert ("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. ");
}
}

}

if (menuDish=="вегитарианско"){
 
  clientTypedessert=prompt 
  (`Моля изберете вида на ястието -
  отбележете само номера на избраният от Вас вид 
  1 ${restaurantMenuVegeterian.MENUVEGETARIAN}
  2 ${restaurantMenuVegeterian.MENUVEGAN}
  3 ${restaurantMenuVegeterian.MENUPESKATERIANSKO}`);

  if  (clientTypeveg=="1")
{
  if(clientVegmenu)
  {
    alert ("Вашата поръчка е изпълнена успешно Благодаря ви, че хапнахте при нас")
  }  

else {
  alert ("Поръчката не Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. ");
}

}

if  (clientTypeveg=="2"){

  if(clientVeganmenu)
  {
    alert ("Вашата поръчка е изпълнена успешно Благодаря ви, че хапнахте при нас")
  }  

else {
  alert ("Поръчката не Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение.  ");
}
}

if  (clientTypeveg=="3")
{
  if(clientPeskaterianskomenu)
  {
    alert ("Вашата поръчка е изпълнена успешно Благодаря ви, че хапнахте при нас")
  }  

else {
  alert ("Поръчката не Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. ");
}
}

}

if (menuDish=="десерт"){
 
  clientTypedessert=prompt 
  (`Моля изберете вкуса на десерта -
  отбележете само номера на избраният от Вас вид 
  1 ${restaurantMenuDessert.MENUDESSERTSTAWBERRY}
  2 ${restaurantMenuDessert.MENUDESSERTBANANA}
  3 ${restaurantMenuDessert.MENUDESSERTVANILIA}`);

  
  if (clientTypedessert=="1")
  {
    clientDessertanswer = prompt ("Пристрастени ли сте към захарта");

    if(clientDessertanswer=="не")
    {
    alert ("Вашата поръчка е изпълнена успешно Благодаря ви, че хапнахте при нас")
    } 
    else{
      alert ("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. ");
    }
  }
else
{
  alert ("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. ");
}

}

