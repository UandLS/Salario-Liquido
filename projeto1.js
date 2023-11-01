function outcome(){

    let Sal = Number(document.getElementById("Sal").value);
    let nDEP = Number(document.getElementById("nDEP").value);
    let PA = Number(document.getElementById("PA").value);
    let DEP = nDEP * 189.59;
    let Vtransp = Sal * 0.06;
    


    const VD = Sal / 30;
    const VH = Sal / 220;
   
    let INSS = 0;
    if (Sal <= 1212.00) {
        INSS = (1212 * 0.075);
    }
    else if (Sal >= 1212.01 && Sal <= 2427.35) {
        INSS = (1212.00 * 0.075) + ((Sal - 1212.01) * 0.09);
    }
    else if (Sal >= 2427.36 && Sal <= 3641.03) {
        INSS = (1212.00 * 0.075) + ((2427.36 - 1212.01) * 0.09) + ((Sal - 2427.36) * 0.12);
    }
    else if (Sal >= 3641.03 && Sal <= 7087.22) {
        INSS = (1212.00 * 0.075) + ((2427.36 - 1212.01) * 0.09) + ((3641.03 - 2427.36) * 0.12) + ((Sal - 3641.04) * 0.14);
    }
    else if (Sal > 7087.22) {
        INSS = 828.39;
    }


    let IRRF = 0;
    let Base = (Sal - (INSS + PA + DEP));

    if (Base < 1903.99) {
        IRRF = "ISENTO"
    }
    else if (Base >= 1903.99 && Base <= 2826.65) {
        IRRF = (Base * 0.075) - 142.80;
    }

    else if (Base >= 2826.66 && Base <= 3751.05) {
        IRRF = (Base * 0.15) - 354.80;
    }

    else if (Base >= 3751.06 && Base <= 4664.68) {
        IRRF = (Base * 0.225) - 636.13;
    }

    else if  (Base > 4664.68) {
        IRRF = (Base * 0.275) - 869.36;
    }

    let TL = (Sal - Vtransp - INSS - PA - DEP - IRRF);

    console.log(Base);
    document.getElementById("Sal").value = Sal
    document.getElementById("Vtransp").value = Vtransp.toFixed(2)
    document.getElementById("PA").value = PA
    document.getElementById("INSS").value = INSS.toFixed(2)
    document.getElementById("IRRF").value = IRRF.toFixed(2)
    document.getElementById("TL").value = TL.toFixed(2)
    document.getElementById("VD").value = VD.toFixed(2)
    document.getElementById("VH").value = VH.toFixed(2)

}