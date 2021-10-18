function drawTriangle(xa, ya, xb, yb, xc, yc) {
    var c = document.getElementById("trDraw");
    var ctx = c.getContext("2d");
    ctx.moveTo(xa,ya);
    ctx.lineTo(xb,yb);
    ctx.lineTo(xc,yc);
    ctx.lineTo(xa,ya); 
    ctx.stroke();
    ctx.strokeStyle = "#ff4500";
    ctx.fill();   
}

function processTriangle() {
    var xa = parseFloat(document.getElementById("xa").value);
    var ya = parseFloat(document.getElementById("ya").value);
    var xb = parseFloat(document.getElementById("xb").value);
    var yb = parseFloat(document.getElementById("yb").value);
    var xc = parseFloat(document.getElementById("xc").value);
    var yc = parseFloat(document.getElementById("yc").value);

    var AB = Math.sqrt(((xa - xb) * (xa - xb)) + ((ya - yb) * (ya - yb)));
    var AC = Math.sqrt(((xa - xc) * (xa - xc)) + ((ya - yc) * (ya - yc)));
    var BC = Math.sqrt(((xc - xb) * (xc - xb)) + ((yc - yb) * (yc - yb)));

    document.getElementById("sides").innerHTML = "AB = " + AB.toFixed(2) + "<br> AC = " + AC.toFixed(2) + "<br> BC = " + BC.toFixed(2);

    var P = AB + AC + BC;

    document.getElementById("perimeter").innerHTML = "Perimeter = " +  P.toFixed(2);

    var p = P/2;

    var S = Math.sqrt(p * (p - AB) * (p - AC) * (p - BC));

    var longestSide = Math.max(AB, AC, BC);

    var result;
    if(longestSide === AB)
    {
        result =  ((AC * AC) + (BC * BC)) - (AB * AB);
        console.log((AC * AC) + (BC * BC));
        console.log(AB * AB);
    }
    else if(longestSide === AC)
    {
        result =  ((AB * AB) + (BC * BC)) - (AC * AC);
        console.log((AB * AB) + (BC * BC));
        console.log(AC * AC);
    }
    else if(longestSide === BC)
    {
        result = ((AC * AC) + (AB * AB)) - (BC * BC);
        console.log((AC * AC) + (AB * AB));
        console.log(BC * BC);
    }

    console.log(result);
    console.log(longestSide);

    document.getElementById("area").innerHTML = "Area = " +  S.toFixed(2);

    document.getElementById("typeTrSides").innerHTML = "Type of triangle(sides) = " + getTriangleTypeSides(AB, AC, BC);
    document.getElementById("typeTrAngles").innerHTML = "Type of triangle(angles) = " + getTriangleTypeAngles(result);

    drawTriangle(xa, ya, xb, yb, xc, yc);
}

function getTriangleTypeSides(a,b,c) {
  return (a === b && b === c) && 'equilateral' ||
  (a === b || a === c || b === c) && 'isosceles' ||
  'scalene';
}

function getTriangleTypeAngles(result) {
    if(result < 0)
    {
        return "obtuse";
    }
    else if(result > 0)
    {
        return "acute";
    }
    else
    {
        return "right";
    }
}
