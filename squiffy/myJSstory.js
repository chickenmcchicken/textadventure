
/*
TODO:/ Add a function that willa allow us to go abck to previous options 
*/


let clickedbuttons=[];
//this class is to control all buttons
const btncl=document.querySelectorAll(".btn");

const div_para=document.getElementById("para");
const img=document.getElementById("img");
console.log(btncl[1]);



//seprate buttons

const button1=document.getElementById("op1");
const button2=document.getElementById("op2");
const button3=document.getElementById("op3");
const button4=document.getElementById("op4");//visibillty hidden by defuault 
 
//headings
const h1=document.getElementById("h1");
const h2=document.getElementById("h2");
const h3=document.getElementById("h3");
const h4=document.getElementById("h4");

const p2 = document.getElementById("p2");



function sleep(ms)
{
    return new Promise(resolove => setTimeout(resolove, ms));
}


function checkArray(var1) {
    const oldv= clickedbuttons.length;

    if(typeof var1 ===null || var1 === undefined){
        sleep(1000);
    }
    else if(typeof var1 !==null || var1 !== undefined)
    {
        clickedbuttons.push(var1);
        const newv=clickedbuttons.length;
        if(newv > oldv)
        {
            main(clickedbuttons[newv-1]);
        }
        
    
    }
}



//tesing purpouse

document.addEventListener("DOMContentLoaded", events());

// Call the function to start monitoring the array
function main(inpu)
{
    
    switch(inpu){
        case(1):
            h3.remove();
            h4.remove();
            p2.innerText="Someone gets hold of the chalk thinking it's a normal chalk and proceeds to draw something.";
            p2.innerText+="\n Can the chalk be able to be used by another person? \n 1)Yes";
            button2.style.visibility="hidden";
            button3.style.visibility="hidden";
            button1.innerText=" Option 4 ";

            break;
        case(2):
            h2.remove();
            h4.remove(); 
            button3.style.visibility="hidden";   
            p2.innerText="Sell it to the highest bidder \n Argon sees his golden opportunity to make it out of poverty with this “magic chalk” and decides to sell it to the highest bidder";
            p2.innerText+="\nHow would he find them?\n 12)He would go to a reputable pawn shop at the financial zone near him. \n 13)He would take a risk and go to this “black market” he heard about from a old colleague of his";   
            button1.innerText=" Option 12 ";
            button2.innerText=" Option 13 ";


            break;
        case(3):
            h2.remove();
            h4.remove();    
            p2.textContent="\nAfter Argon looked at the chalk for a few hours. \nIt started to get late and now he is hungry. \nHe decides to draw a sandwich. \nThe sandwich magically appears! Should argon eat it?"; //18
            button1.innerText= "Yes";
            button2.innerText="No";
            button3.style.visibility="hidden";
            button4.style.visibility="hidden";
            break;
        case(4):

            button2.style.visibility="visible";
            button3.style.visibility="visible";
            button4.style.visibility="visible";
            p2.innerText+="\nThe person was curious about the chalk, so he started to draw an ipad and it appeared. \nHe started to wonder how the chalk has this much power. The man started to draw illegal goods like money and it somehow worked. ";
            p2.innerText+="\nAs the person started to use fake money , what should happen?\n 5)The person gets caught with the fake money and the chalk and they find Argons fingerprint on the chalk\n 6)The person got away and started to make a lot of money from it \n 7)Argon saw what happened and he wanted the chalk back as he saw how much things he can do , illegal or legal \n8)The chalk only works with Argon as the chalk somehow mysteriously went back into his pocket.";
            button1.innerText=" Option 5 ";
            button2.innerText=" Option 6 ";
            button3.innerText= " Option 7 "; 
            button4.innerText=" Option 8 ";



            break;


        //jason story
        case(5):
            p2.innerText+="\nArgon got arrested for having to do something with it";
            button3.style.visibility="hidden";
            button2.style.visibility="hidden";
            button1.style.visibility="hidden";
            button4.style.visibility="hidden";
            break;

        case(6):
            p2.innerText+="\nThe person stroke rich and Argon has no idea of it";

            button3.style.visibility="hidden";
            button2.style.visibility="hidden";
            button1.style.visibility="hidden";
            button4.style.visibility="hidden";
            
            break;
            

        case(7):
            p2.innerText+="\nArgon tries getting the chalk back but it's too late, the person is gone in his chalk drawn car";
            button3.style.visibility="hidden";
            button2.style.visibility="hidden";
            button1.style.visibility="hidden";
            button4.style.visibility="hidden";
            img.innerHTML+="<image src=images/image.png>";
            break;
        case(8):
            p2.innerText="\nArgon was confused as he remembered he threw away the chalk, He was shocked that it cannot be tossed away. He is thinking to himself of ways to get rid of the chalk ,how should he get rid of the chalk that wouldn't go away?\n 9)Try breaking into pieces \n 10 \n Set it on fire but the chalk won’t burn 11)Puts it into a safe with the key inside the safe";
            button4.style.visibility="hidden";
            img.innerHTML+="<image src=images/image1.png>";
            button1.innerText=" Option 9 ";
            button2.innerText=" Option 10 ";
            button3.innerText= " Option 11 "; 
            break;
        case (9):
            p2.innerText+="\nit wouldn't break and would only come back to his pocket";
            button3.style.visibility="hidden";
            button2.style.visibility="hidden";
            button1.style.visibility="hidden";
            button4.style.visibility="hidden";
            break;
        case(10):
            p2.innerText+="\nIt instead turned into powdered and merged itself back";
            button3.style.visibility="hidden";
            button2.style.visibility="hidden";
            button1.style.visibility="hidden";
            button4.style.visibility="hidden";
            break;
        case(11):
            p2.innerText+="\nThe chalk is now safe with the key inside as he hides it in an abandoned building.";
            button3.style.visibility="hidden";
            button2.style.visibility="hidden";
            button1.style.visibility="hidden";
            button4.style.visibility="hidden";
            break;

        //hermen story

        case(12):
            p2.innerText+="\n 1.Argon had entered the door of the brightly decorated pawn shop,He known this place all too well as where he had sold all his furniture for necessities.\nThis place stays as a reminder towards how Argon has nothing to his name. \nThe cashier welcomes Argon assuming he has furniture to sell and asks”well what is it today Argon”.\nArgon replies in a unusually happy tone for him”I'm sure this chalk has some good worth to it”\nThe cashier wonders if Argons lost it and asks what's so special about it and Argon tells him of its abilities.The cashier \n  doesn't believe him but won't miss the chance to make some extra cash and asks him to show off its powers and so Argon takes him to a dark room. \n14.Argon draws a stack of cash \n15.Argon draws another chalk for the cashier to keep";
            button1.innerText=" Option 14";
            button2.innerText=" Option 15 ";
            break;
        //going back to case (2)
        case(14):
            p2.innerText+="\n The cashier is so happy at the find that he gives Argon all his money in the register because of how much of a game changer it is but as soon as argon opens the door the light goes in and everything he made disappears.Leaving the cashier to call him a scammer and call the authorities on him causing argon to be arrested without having his chalk.";
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";
            break;
       case(15):
            p2.innerText+="\n The cashier realizes the propertys the chalk holds and decides that the best thing to do is to give him the money for it but as soon as argon leaves the light comes in and gets rid of everything the cashier drawn but argon had already fled with the money and never showed his face in town again.";
    
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";
            break;

        case(13):
            p2.innerText+="\nArgon approaches a rusted door in a dimly lit alley way and knocks 3 times with different rhythms as he was told to.\nA deep raspy voice answers the door”What's your business here?”\nArgon answers calmly and monotone since he has nothing to lose and tells him he has something he would like to sell.\nThe man lets him in,Argon is appalled at the layout of the building and how big it is compared to its outside appearance.\nHe heard rumors of what this place might be.He had seen the man who opened the door his sleeves were tucked showing a tattoo of a dragon his suspicions were correct and came to the consensus that this was a yakuza hideout.\nArgon meets with their boss who greets himself as mr yunikon and has to choose his word carefully. What should argon say?\n 16.He greets him very brash and cocky\n 17.He greets him very respectfully and reserved";    
            button1.innerText=" Option 16 ";
            button2.innerText=" Option 17 ";
            break;
        case (16):
            p2.innerText+="\nThe leader surprisingly likes argon for how forward and outgoing he is and decides to hear him out and gives him a great proposition he cant refuse";
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";  
            break;
        case(17):
            p2.innerText+="\nThe boss realizes how reserved and kept to himself argon is so he hears him out and betrays him and takes the chalk for himself exploiting argons quietness…";
            button1.style.visibility="hidden";
            button2.style.visibility="hidden"; 
            break;


        //Ameers story
        case(18):
            p2.innerText+="\nit fills him up \n He decides to draw more food, now he is currently full and takes a nap. When he walks up he is suddenly hungry and the chalk is not working.  What should he do?\n 19) Go outside and find/eat leftovers\n 20) Ask his friend for some food\n 21) Wait until its pitch black at night to test the chalk again to test its abilities";
            button3.style.visibility="visible";
            button1.innerText=" Option 19";
            button2.innerText=" Option 20";
            button3.innerText = " Option 21 ";
            
            img.innerHTML+="<img src=images/food2jpg.jpg>";
            break;
        case(19):
            p2.innerText+="He finds half a sandwich and a dead bird. He ate the sandwich and decided to put the dead bird in the pocket he put the chalk in. When he got home and took the dead bird out to eat he realized the chalk went missing. He didn’t care at this point and moved on with his life.\n The person who found the chalk used it to make his business profitable and became wealthy.\n In the end Argon became homeless with no money on his name.";
   
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";
            button3.style.visibility="hidden";
            break;
        case(20):
            p2.innerText+="\nJack shared half his fried rice with Argon, then he proceeded to ask him when will he ever get an actual job? Argon replied with I will have one with this chalk. I can create anything with this chalk.\n Look, I can create cash from the drawing. Aron proceeds to draw cash, but nothing happens.\n Jack looked weirdly at the drawing. Argon “WAIT I CAN EXP-”. Jack: “I saw enough. Argon I wish you the best, but you need help.\n You’re going crazy.” After Argon heard that statement he decided to actually take his advice. He decided to get a job in his local restaurant.\n He got barely paid, but it was way more than he used to get paid.\n He slowly was able to buy a bed and afford food. Although he never talked to Jack again he respects him for his honesty.";
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";
            button3.style.visibility="hidden";
            break;
        case(21):
            p2.innerText+="After he makes this new chalk. He used the chalk right away to decorate his room to make it clean and expensive. \nThen he drew countless amounts of food, new clothing for himself and drew some money. He decided to go shopping and what he bought was a magazine and bought a whole store. \nIn the magazine he sees a famous female actress named Ms.Nippon. He decides to draw her body and draws what personalities to give her.\n The person he drew is the wife he always wanted. Some that he can talk to, someone that will stick with him. This is all he wanted to be successful.\n With the chalk he is able to do that. Eventually he was caught using the chalk to make money and items and got arrested. \nWhat got him caught was his reckless spending with cash that he magically earned. \nHe is serving life time in jail while his version of Ms.Nippon becomes a actress to make money to bail him out. ";        
            img.innerHTML="<image src=images/ch2jpg.jpg>";
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";
            button3.style.visibility="hidden";
            break;
        case(22):
            button3.style.visibility="hidden";    
            p2.innerText+="After this shock he decided to use all the chalk to make food. The amount he created is more than enough for one person. \nHe was full until the next morning  when he realized all the extra food was gone. He realized that it must have been a dream or the chalk had its limits, but it was too late. \nHe can’t live without being full and having all he wants. \n23)Have argon stay in this delusion? \n24)He finally stops being lazy and actually get his life in order";
            img.innerHTML="<image src=images/food.jpg>";
            button1.innerText=" Option 23 ";
            button2.innerText= " Option 24 ";
            break;
        case(23):
            p2.innerText+="He sold his cloth in order to buy more chalk. The issue is these chalks were just normal chalk. He went crazy until his landlord kicked him out.\n Now he is homeless and suffering with hunger as his only food option is trashed food or sewage.";
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";
            break;
        case(24):
            p2.innerText+="He asked his friend Jack for help getting a job. Jack without hesitation agrees.\n He buys argon new cloth and gives him a referral. Then argon gets the job and finally is able to have a full meal.";
            button1.style.visibility="hidden";
            button2.style.visibility="hidden";
            break;            
       
        
            




    }


}

function events(){
    btncl.forEach(bt => {
    bt.addEventListener("click", (e)=>{
        if(e.target.innerHTML == " Option 1 "){
            checkArray(1);

        }
        else if(e.target.innerHTML == " Option 2 "){
            checkArray(2);
        }
        else if(e.target.innerHTML == " Option 3 "){
            checkArray(3);
        }
        else if(e.target.innerHTML == " Option 4 "){
            checkArray(4);
        }
        else if(e.target.innerHTML == " Option 5 "){
            checkArray(5);
        }
        else if(e.target.innerHTML == " Option 6 "){
            checkArray(6);
        }
        else if(e.target.innerHTML == " Option 7 "){
            checkArray(7);
        }
        else if(e.target.innerHTML == " Option 8 "){
            checkArray(8);
        }
        else if(e.target.innerHTML == " Option 9 "){
            checkArray(9);
        }
        else if(e.target.innerHTML == " Option 10 "){
            checkArray(10);
        }
        else if(e.target.innerHTML == " Option 11 "){
            checkArray(11);
        }
        else if(e.target.innerHTML == " Option 12 "){
            checkArray(12);
        }
        else if(e.target.innerHTML == " Option 13 "){
            checkArray(13);
        }
        else if(e.target.innerHTML == " Option 14 "){
            checkArray(14);
        }
        else if(e.target.innerHTML == " Option 15 "){
            checkArray(15);
        }
        else if(e.target.innerHTML == " Option 16 "){
            checkArray(16);
        }
        else if(e.target.innerHTML == " Option 17 "){
            checkArray(17);
        }
        else if(e.target.innerHTML == "Yes"){
            checkArray(18);
        }
        else if(e.target.innerHTML == " Option 19 "){
            checkArray(19);
        }
        else if(e.target.innerHTML == " Option 20 "){
            checkArray(20);
        }
        else if(e.target.innerHTML == " Option 21 "){
            checkArray(21);
        }
        else if(e.target.innerHTML == "No"){
            checkArray(22);//CHANGE
        }
        else if(e.target.innerHTML == " Option 23 "){
            checkArray(23);
        }
        else if(e.target.innerHTML == " Option 24 "){
            checkArray(24);
        }


        else{
            sleep(1000);
        }
        

    })
    });
}