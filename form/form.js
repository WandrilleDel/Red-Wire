let valeur = 1;

function modifier(increment) {
    if (increment > 0) {
        if (valeur == 0) {
            document.getElementById('moins').removeAttribute("disabled");
            valeur += 1;
        } else if (valeur == 4) {
            document.getElementById('plus').setAttribute("disabled", "");
            document.getElementById('moins').removeAttribute("disabled");
            valeur += 1;
        } else if(valeur >= 1 && valeur <= 5) {
            document.getElementById('moins').removeAttribute("disabled");
            document.getElementById('plus').removeAttribute("disabled");
            valeur += 1;
        }
    } else if (increment < 0) {
        if (valeur == 1) {
            document.getElementById('moins').setAttribute("disabled", "");
            document.getElementById('plus').removeAttribute("disabled");
            valeur -= 1;
        } else if(valeur >= 1 && valeur <= 5) {
            document.getElementById('moins').removeAttribute("disabled");
            document.getElementById('plus').removeAttribute("disabled");
            valeur -= 1;
        }
    }
    
    document.getElementById('text').value=valeur;
}
let valeur1 = 1;

function modifier1(increment) {
    if (increment > 0) {
        if (valeur1 == 0) {
            document.getElementById('moins1').removeAttribute("disabled");
            valeur1 += 1;
        } else if (valeur1 == 4) {
            document.getElementById('plus1').setAttribute("disabled", "");
            document.getElementById('moins1').removeAttribute("disabled");
            valeur1 += 1;
        } else if(valeur1 >= 1 && valeur1 <= 5) {
            document.getElementById('moins1').removeAttribute("disabled");
            document.getElementById('plus1').removeAttribute("disabled");
            valeur1 += 1;
        }
    } else if (increment < 0) {
        if (valeur1 == 1) {
            document.getElementById('moins1').setAttribute("disabled", "");
            document.getElementById('plus1').removeAttribute("disabled");
            valeur1 -= 1;
        } else if(valeur1 >= 1 && valeur1 <= 5) {
            document.getElementById('moins1').removeAttribute("disabled");
            document.getElementById('plus1').removeAttribute("disabled");
            valeur1 -= 1;
        }
    }
    
    document.getElementById('text1').value=valeur1;
}