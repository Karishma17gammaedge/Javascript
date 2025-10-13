function outerfunction(){
    let outervariable = "Outervariable";

    function innerfunction(){
        console.log(outervariable);
        
    }
    return innerfunction;
}

const closure = outerfunction()
closure()


