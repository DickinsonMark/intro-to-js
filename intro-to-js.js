// 1
for (x = 0; x <= 10; x++) {
  console.log(x * 100);
};

// 2
for (y = 1; y <= 128; y * 2) {
  console.log(y);
};

// 3
for (z = 0; z <= 10; z + 2) {
  console.log(z);
};

// 4
for (a = 3; a <= 15; a * 3) {
  console.log(a);
};

// 5
for (b = 9; 9 >= 0; b--) {
  console.log(b);
};

// 6
for (c = 1; c <= 4; c++) {
  console.log(c);
  console.log(c);
  console.log(c);
};

// 7
for (d = 0; d <= 2; d++) {
  for (e = 0; e <= 4; e++) {
    console.log(e);
  }
}

// problems at bottom
// 1
for (f = 1; f <= 25; f++) {
  console.log(f);
  if (f % 2 === 0){
    console.log("even");
  }
  else {
    console.log("odd");
  };
};

// 2
for (g = 1; g <= 50; g++) {
  if (g % 3 === 0 && g % 5 === 0) {
    console.log("FizzBuzz");
  } else if (g % 3 === 0) {
    console.log("Fizz");
  } else if (g % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(g);
  };
};
