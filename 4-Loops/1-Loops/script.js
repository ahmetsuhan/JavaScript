//Loops

    //For loop
    for(let i= 0 ; i<10;i++){
        console.log(i);
    }

    //while loop
    let i = 0;
    while(i<=10)
    {
        console.log(i);
        i++;
    }

    //do-while loop
    let c = 0;
    do {
        console.log(c);
        c++;
    } while (c<=5);


    let val="\n";
    for (let row = 0; row < 10; row++) {
        for(let column=0; column<10;column++){
            val+="*";
        }
        val+="\n";
    }
    console.log(val);