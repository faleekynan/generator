
var myTxt = new Array(
'<textarea  readonly class="expiry">04 01 2025</textarea>',
'<textarea  readonly class="expiry">14 10 2030</textarea>',
'<textarea  readonly class="expiry">23 12 2023</textarea>',
'<textarea  readonly class="expiry">24 11 2030</textarea>',
'<textarea  readonly class="expiry">02 11 2028</textarea>',
'<textarea  readonly class="expiry">19 03 2029</textarea>',
'<textarea  readonly class="expiry">06 10 2028</textarea>',
'<textarea  readonly class="expiry">05 06 2026</textarea>',
'<textarea  readonly class="expiry">23 06 2023</textarea>',
'<textarea  readonly class="expiry">03 04 2024</textarea>',
'<textarea  readonly class="expiry">24 08 2026</textarea>',
'<textarea  readonly class="expiry">05 01 2027</textarea>',
'<textarea  readonly class="expiry">06 05 2030</textarea>',
'<textarea  readonly class="expiry">27 02 2025</textarea>',
'<textarea  readonly class="expiry">29 11 2028</textarea>',
'<textarea  readonly class="expiry">27 09 2023</textarea>',
'<textarea  readonly class="expiry">18 08 2028</textarea>',
'<textarea  readonly class="expiry">15 12 2025</textarea>',
'<textarea  readonly class="expiry">08 12 2027</textarea>',
'<textarea  readonly class="expiry">09 12 2023</textarea>',
'<textarea  readonly class="expiry">10 11 2028</textarea>',
'<textarea  readonly class="expiry">20 02 2027</textarea>',
'<textarea  readonly class="expiry">03 09 2030</textarea>',
'<textarea  readonly class="expiry">16 07 2023</textarea>',
'<textarea  readonly class="expiry">14 09 2029</textarea>',
'<textarea  readonly class="expiry">26 02 2030</textarea>',
'<textarea  readonly class="expiry">28 08 2023</textarea>',
'<textarea  readonly class="expiry">05 02 2027</textarea>',
'<textarea  readonly class="expiry">06 04 2027</textarea>',
'<textarea  readonly class="expiry">02 04 2030</textarea>',
'<textarea  readonly class="expiry">22 01 2029</textarea>',
'<textarea  readonly class="expiry">26 10 2023</textarea>',
'<textarea  readonly class="expiry">30 12 2026</textarea>',
'<textarea  readonly class="expiry">21 08 2023</textarea>',
'<textarea  readonly class="expiry">22 10 2029</textarea>'
                       );
randnm=Math.round(Math.random()*(myTxt.length-1));

document.getElementById("expiry").innerHTML = myTxt[randnm];
