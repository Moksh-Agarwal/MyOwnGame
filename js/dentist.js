class Dentist
{
    constructor()
    {
       this.tooth=loadImage("images/tooth.png");

    }
    display()
    {
        if(gamestate==3)
        {

        background(255, 189,55);
        choice.hide();
       
image(this.tooth, displayWidth/4, displayHeight/3);


cavity=createSprite(0,0, 5,10);
       if(mousePressedOver(cavity))
       {
           cavity.visible=false;
       }  
        }
    }
}