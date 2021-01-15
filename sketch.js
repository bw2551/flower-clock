function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(240, 255, 255);

	var h = map(hour(), 0, 24, 0, 450); 
	var m = map(minute(), 0, 60, 0, 450);
	var s = map(second(), 0, 60, 0, 450);

	fill(98, 201, 93);
	rect(200,550 - h,15, h);  
	fill(98, 201, 93);
	rect(400, 550 - m, 15, m);
	fill(98, 201, 93);
	rect(600, 550 - s, 15, s);

	if (h == 0) {
		// no flower
	} else if (h < 100) {
		// flower bud
		fill(98, 201, 93);
		circle(207, 550 - h, 30);
	} else {
		// orange flower for hours
		fill(224, 151, 47);
		circle(207, 530 - h, 30);
		circle(207 - 20, 545 - h, 30);
		circle(207 + 20, 545 - h, 30);
		circle(207 - 14, 570 - h, 30);
		circle(207 + 14, 570 - h, 30);

		// center of flower
		fill(61, 34, 32);
		circle(207, 550 - h, 30);
	}

	if (m == 0) {
		// no flower
	} else if (m < 100) {
		// flower bud
		fill(98, 201, 93);
		circle(407, 550 - m, 30);
	} else {
		// purple flower for minutes
		fill(162, 67, 191);
		circle(407, 530 - m, 30);
		circle(407 - 20, 545 - m, 30);
		circle(407 + 20, 545 - m, 30);
		circle(407 - 14, 570 - m, 30);
		circle(407 + 14, 570 - m, 30);

		// center of flower
		fill(61, 34, 32);
		circle(407, 550 - m, 30);
	}

	if (s == 0) {
		// no flower
	} else if (s < 100) {
		// flower bud
		fill(98, 201, 93);
		circle(607, 550 - s, 30);
	} else {
		// pink flower for seconds
		fill(204, 67, 108);
		circle(607, 530 - s, 30);
		circle(607 - 20, 545 - s, 30);
		circle(607 + 20, 545 - s, 30);
		circle(607 - 14, 570 - s, 30);
		circle(607 + 14, 570 - s, 30);

		// center of flower
		fill(61, 34, 32);
		circle(607, 550 - s, 30);
	}
  
}