function bmi(weight, height){
    mass = weight / (height * height);
    if (mass <= 18.5) return 'underweight';
    else if (mass <= 25) return 'normal';
    else if (mass <= 30) return 'overweight';
    else if (mass > 30) return 'obese';

    
}
