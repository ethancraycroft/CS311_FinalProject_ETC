let MTFclicked = new Boolean;
let KTMclicked = new Boolean;
let CTFclicked = new Boolean;
let KTPclicked = new Boolean;
let GTOclicked = new Boolean;

function setLabels(lbl1, lbl2, option)
{
    //sets the labels under the textboxes for the desired conversion
    document.getElementById("lblUnit1").innerHTML = lbl1;
    document.getElementById("lblUnit2").innerHTML = lbl2;

    //defaults all clicked booleans to false
    MTFclicked = false;
    KTMclicked = false;
    CTFclicked = false;
    KTPclicked = false;
    GTOclicked = false;


    //determines which radio button was clicked and sets that boolean to treu
    switch(option)
    {
        case 1:
            MTFclicked = true;
            break;
        case 2:
            KTMclicked = true;
            break;
        case 3:
            CTFclicked = true;
            break;
        case 4:
            KTPclicked = true;
            break;
        case 5:
            GTOclicked = true;
            break;
        default:
            break;
    }

    //defaults textboxes to be empty
    document.getElementById("txtUnit1Input").value = "";
    document.getElementById("txtUnit2Input").value = "";
}

function calculate(option)
{

    let input1 = document.getElementById("txtUnit1Input").value;
    let input2 = document.getElementById("txtUnit2Input").value;


    //performs calculations based on which button is selected
    if(MTFclicked == true)
    {
        switch(option)
        {
            case 1:
                document.getElementById("txtUnit2Input").value = input1 * 5280;
                break;
            case 2:
                document.getElementById("txtUnit1Input").value = input2 / 5280;
                break;
            default:
                break;
        }
    }
    else if(KTMclicked == true)
    {
        switch(option)
        {
            case 1:
                document.getElementById("txtUnit2Input").value = input1 / 1.609344;
                break;
            case 2:
                document.getElementById("txtUnit1Input").value = input2 * 1.609344;
                break;
            default:
                break;
        }
    }
    else if(CTFclicked == true)
    {
        switch(option)
        {
            case 1:
                document.getElementById("txtUnit2Input").value = (1.8 * input1) + 32;
                break;
            case 2:
                document.getElementById("txtUnit1Input").value = ((input2 - 32) * 5) / 9;
                break;
            default:
                break;
        }
    }
    else if (KTPclicked == true)
    {
        switch(option)
        {
            case 1:
                document.getElementById("txtUnit2Input").value = 2.20462262185 * input1;
                break;
            case 2:
                document.getElementById("txtUnit1Input").value = input2 / 2.20462262185;
                break;
            default:
                break;
        }
    }
    else if(GTOclicked == true)
    {
        switch(option)
        {
            case 1:
                document.getElementById("txtUnit2Input").value = input1 / 28.34952;
                break;
            case 2:
                document.getElementById("txtUnit1Input").value = input2 * 28.34952;
                break;
            default:
                break;
        }
    }
}
