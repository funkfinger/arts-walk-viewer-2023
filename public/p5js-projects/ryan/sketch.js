// create a class for an interactive square
// https://github.com/processing/p5.js-web-editor/issues/1517 asnwer for the odd console messages

//waveform collapse sudoku
const arr = [];
let background_col = 255;

const orig = [
  0,
  0,
  3,
  0,
  2,
  0,
  6,
  0,
  0,
  9,
  0,
  0,
  3,
  0,
  5,
  0,
  0,
  1,
  0,
  0,
  1,
  8,
  0,
  6,
  4,
  0,
  0,
  0,
  0,
  8,
  1,
  0,
  2,
  9,
  0,
  0,
  7,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  8,
  0,
  0,
  6,
  7,
  0,
  8,
  2,
  0,
  0,
  0,
  0,
  2,
  6,
  0,
  9,
  5,
  0,
  0,
  8,
  0,
  0,
  2,
  0,
  3,
  0,
  0,
  9,
  0,
  0,
  5,
  0,
  1,
  0,
  3,
  0,
  0,
];
let current_numbers = [
  0,
  0,
  3,
  0,
  2,
  0,
  6,
  0,
  0,
  9,
  0,
  0,
  3,
  0,
  5,
  0,
  0,
  1,
  0,
  0,
  1,
  8,
  0,
  6,
  4,
  0,
  0,
  0,
  0,
  8,
  1,
  0,
  2,
  9,
  0,
  0,
  7,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  8,
  0,
  0,
  6,
  7,
  0,
  8,
  2,
  0,
  0,
  0,
  0,
  2,
  6,
  0,
  9,
  5,
  0,
  0,
  8,
  0,
  0,
  2,
  0,
  3,
  0,
  0,
  9,
  0,
  0,
  5,
  0,
  1,
  0,
  3,
  0,
  0,
];
let candidate_matrix = [];

/*
Ways to improve this project and ideas for future:
For the original matrices for the sudoku puzzle, group the rows into their own arrays so that indexing is easier. Instead of a 1 dimensional array, perhaps a 2 dimensional array would be more suitable for this task. 
Instead of relying upon mental math and brute force methods, it could be beneficial to do it properly and efficiently
Don't make random global variables out of laziness
Spend some time to periodically clean up the code and shorten some of the variable names
If I do something the brute force way just to get the idea down and functioning, perhaps go back and spend a little time to fix it up
Making the code cleaner and more readable just makes it infinitely easier to find bugs and change things later. Instead of just finding a janky way to get it done in the moment, it could be nice to spend a little extra time to improve quality
*/


function setup() {
  createCanvas(630, 630);
  frameRate(1);
  rectMode(CORNERS);
  cell_size = width / 9;
  for (let b = 0; b < width; b += cell_size) {
    for (let i = 0; i < height; i += cell_size) {
      arr.push(new box(i, b, cell_size));
    }
  }

  for (let d = 0; d < current_numbers.length; d++) {
    if (current_numbers[d] != 0) {
      candidate_matrix.push([current_numbers[d]]);
    } else {
      candidate_matrix.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    // console.log(Array.from(candidate_matrix), d);
    // alert(candidate_matrix, d);
  }
}
let c = 1;
function draw() {
  //   console.log(Array.from(candidate_matrix), 'k');
  // console.log(Array.from(current_numbers), 'j');
  // alert(candidate_matrix);
  // console.log(candidate_matrix, "k");
  // console.log(current_numbers, "ko");
  background(background_col);
  arr[0].draw_grid();
  // console.log(candidate_matrix, "l");
  update_candidate_matrix();
  // console.log(candidate_matrix, "p");
  fill_new_box();
  if (c == 1) {
    arr[indy].highlight();
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].display_numbers(current_numbers[i]);
  }
  if (current_numbers.find((num) => num == 0) == undefined) {
    c++;
    fill(0, 255, 0, 125);
    rect(0, 0, width, height);

    if (c == 5) {
      c = 1;
      current_numbers = Array.from(orig);
      candidate_matrix = [];
      for (let d = 0; d < current_numbers.length; d++) {
        if (current_numbers[d] != 0) {
          candidate_matrix.push([current_numbers[d]]);
        } else {
          candidate_matrix.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
      }
      // noLoop();
      // console.log('done')
    }
  }
  // c ++;
  // if (c == 20) {
  //   console.log(c, 'c')
  //   noLoop();
  // }
  // // noLoop();
}

function update_candidate_matrix() {
  // console.log("what");
  // console.log(Array.from(candidate_matrix), 'hji');
  for (let index = 0; index < 81; index++) {
    const num_current_box = current_numbers[index];
    if (num_current_box != 0) {
      //remove current_numbers[i] from each row and column of the candidate matrix
      column_num = Math.floor(index / 9);
      row_num = index - column_num * 9;
      // console.log(column_num);

      const row_box1 = candidate_matrix[column_num * 9];
      const row_box2 = candidate_matrix[1 + column_num * 9];
      const row_box3 = candidate_matrix[2 + column_num * 9];
      const row_box4 = candidate_matrix[3 + column_num * 9];
      const row_box5 = candidate_matrix[4 + column_num * 9];
      const row_box6 = candidate_matrix[5 + column_num * 9];
      const row_box7 = candidate_matrix[6 + column_num * 9];
      const row_box8 = candidate_matrix[7 + column_num * 9];
      const row_box9 = candidate_matrix[8 + column_num * 9];
      // console.log(row_box1, row_box2, row_box3, row_box4, row_box5, row_box6, row_box7, row_box8, 'hi')

      for (let i = 0; i < 9; i++) {
        // console.log(i + column_num*9, 'row_indexing');
        const box = candidate_matrix[i + column_num * 9];

        // need to make sure that that number hasn't already been singled in another candidate box

        if (
          box.length != 0 &&
          box.indexOf(num_current_box) != -1 &&
          box.length != 1
        ) {
          if (
            row_box1 !== [num_current_box] &&
            row_box2 !== [num_current_box] &&
            row_box3 !== [num_current_box] &&
            row_box4 !== [num_current_box] &&
            row_box5 !== [num_current_box] &&
            row_box6 !== [num_current_box] &&
            row_box7 !== [num_current_box] &&
            row_box8 !== [num_current_box] &&
            row_box9 !== [num_current_box]
          ) {
            box.splice(box.indexOf(num_current_box), 1);
          }
        }
      }

      const col_box1 = candidate_matrix[row_num * 9];
      const col_box2 = candidate_matrix[9 + row_num * 9];
      const col_box3 = candidate_matrix[18 + row_num * 9];
      const col_box4 = candidate_matrix[27 + row_num * 9];
      const col_box5 = candidate_matrix[36 + row_num * 9];
      const col_box6 = candidate_matrix[45 + row_num * 9];
      const col_box7 = candidate_matrix[54 + row_num * 9];
      const col_box8 = candidate_matrix[63 + row_num * 9];
      const col_box9 = candidate_matrix[72 + row_num * 9];

      for (let i = 0; i < 81; i += 9) {
        // console.log(i + row_num, 'col_indexing');
        const box = candidate_matrix[i + row_num];
        if (
          box.length != 0 &&
          box.indexOf(num_current_box) != -1 &&
          box.length != 1
        ) {
          if (
            col_box1 != [num_current_box] &&
            col_box2 != [num_current_box] &&
            col_box3 != [num_current_box] &&
            col_box4 != [num_current_box] &&
            col_box5 != [num_current_box] &&
            col_box6 != [num_current_box] &&
            col_box7 != [num_current_box] &&
            col_box8 != [num_current_box] &&
            col_box9 != [num_current_box]
          ) {
            box.splice(box.indexOf(num_current_box), 1);
          }
        }
      }

      // add a check for the same number in the box
      for (let i = 0; i < 27; i += 9) {
        const box_box1 =
          candidate_matrix[
            0 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box2 =
          candidate_matrix[
            9 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box3 =
          candidate_matrix[
            18 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box4 =
          candidate_matrix[
            2 +
              0 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box5 =
          candidate_matrix[
            2 +
              9 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box6 =
          candidate_matrix[
            2 +
              18 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box7 =
          candidate_matrix[
            1 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box8 =
          candidate_matrix[
            1 +
              9 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box9 =
          candidate_matrix[
            1 +
              18 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        // console.log(Math.floor(row_num / 3), Math.floor(column_num/3), 'test')
        // console.log(box_box1, box_box2, box_box3, box_box4, box_box5, box_box6, box_box7, box_box8, box_box9, 'r')
        // // console.log(row_num / 3, 'hi')
        // // console.log(i + Math.floor(row_num / 3) + column_num*9, 'box_indexing');
        const box1 =
          candidate_matrix[
            i + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        if (
          box_box1 != [num_current_box] &&
          box_box2 != [num_current_box] &&
          box_box3 != [num_current_box] &&
          box_box4 != [num_current_box] &&
          box_box5 != [num_current_box] &&
          box_box6 != [num_current_box] &&
          box_box7 != [num_current_box] &&
          box_box8 != [num_current_box] &&
          box_box9 != [num_current_box]
        ) {
          // console.log(Array.from(box), "hehe");
          // console.log(i + row_num, 'indx')
          // console.log((num_current_box), 'jeje')

          if (
            box1.length != 0 &&
            box1.indexOf(num_current_box) != -1 &&
            box1.length != 1
          ) {
            box1.splice(box1.indexOf(num_current_box), 1);
          }
        }
      }
      for (let i = 0; i < 27; i += 9) {
        const box_box1 =
          candidate_matrix[
            0 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box2 =
          candidate_matrix[
            9 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box3 =
          candidate_matrix[
            18 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box4 =
          candidate_matrix[
            2 +
              0 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box5 =
          candidate_matrix[
            2 +
              9 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box6 =
          candidate_matrix[
            2 +
              18 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box7 =
          candidate_matrix[
            1 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box8 =
          candidate_matrix[
            1 +
              9 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box9 =
          candidate_matrix[
            1 +
              18 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        // console.log(row_num / 3, 'hi')
        // console.log(i + Math.floor(row_num / 3) + column_num*9, 'box_indexing');

        const box2 =
          candidate_matrix[
            i +
              Math.floor(row_num / 3) * 3 +
              1 +
              Math.floor(column_num / 3) * 27
          ];

        if (
          box_box1 != [num_current_box] &&
          box_box2 != [num_current_box] &&
          box_box3 != [num_current_box] &&
          box_box4 != [num_current_box] &&
          box_box5 != [num_current_box] &&
          box_box6 != [num_current_box] &&
          box_box7 != [num_current_box] &&
          box_box8 != [num_current_box] &&
          box_box9 != [num_current_box]
        ) {
          // console.log(Array.from(box), "hehe");
          // console.log(i + row_num, 'indx')
          // console.log((num_current_box), 'jeje')

          if (
            box2.length != 0 &&
            box2.indexOf(num_current_box) != -1 &&
            box2.length != 1
          ) {
            box2.splice(box2.indexOf(num_current_box), 1);
          }
        }
      }

      for (let i = 0; i < 27; i += 9) {
        const box_box1 =
          candidate_matrix[
            0 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box2 =
          candidate_matrix[
            9 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box3 =
          candidate_matrix[
            18 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box4 =
          candidate_matrix[
            2 +
              0 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box5 =
          candidate_matrix[
            2 +
              9 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box6 =
          candidate_matrix[
            2 +
              18 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box7 =
          candidate_matrix[
            1 + Math.floor(row_num / 3) * 3 + Math.floor(column_num / 3) * 27
          ];
        const box_box8 =
          candidate_matrix[
            1 +
              9 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        const box_box9 =
          candidate_matrix[
            1 +
              18 +
              Math.floor(row_num / 3) * 3 +
              Math.floor(column_num / 3) * 27
          ];
        // console.log(row_num / 3, 'hi')
        // console.log(i + Math.floor(row_num / 3) + column_num*9, 'box_indexing');
        const box3 =
          candidate_matrix[
            i +
              Math.floor(row_num / 3) * 3 +
              2 +
              Math.floor(column_num / 3) * 27
          ];
        if (
          box_box1 != [num_current_box] &&
          box_box2 != [num_current_box] &&
          box_box3 != [num_current_box] &&
          box_box4 != [num_current_box] &&
          box_box5 != [num_current_box] &&
          box_box6 != [num_current_box] &&
          box_box7 != [num_current_box] &&
          box_box8 != [num_current_box] &&
          box_box9 != [num_current_box]
        ) {
          // console.log(Array.from(box), "hehe");
          // console.log(i + row_num, 'indx')
          // console.log((num_current_box), 'jeje')

          if (
            box3.length != 0 &&
            box3.indexOf(num_current_box) != -1 &&
            box3.length != 1
          ) {
            box3.splice(box3.indexOf(num_current_box), 1);
          }
        }
      }
    }
  }
}

let indy = 0;
function fill_new_box() {
  // console.log("wi");
  for (let i = 0; i < current_numbers.length; i++) {
    if (candidate_matrix[i].length == 1 && current_numbers[i] == 0) {
      // console.log(candidate_matrix[i][0], "jim");

      // this could be the problem
      // https://stackoverflow.com/questions/56181119/p5-js-draw-function-executing-for-loops-in-wrong-order

      current_numbers[i] = candidate_matrix[i][0];
      indy = [i];
      // console.log(current_numbers[i], i)
      // console.log('hi')
      break;
      // break;
    }
  }
}

class box {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.s = size;
  }
  display_numbers(number) {
    strokeWeight(1);
    stroke(0);
    fill(0);
    this.num = number;
    if (number != 0) {
      text(number, this.x + 0.5 * this.s, this.y + 0.5 * this.s);
    }
  }
  draw_grid() {
    stroke(0);
    for (let i = 0; i <= width; i += this.s) {
      if (i % 3 == 0) {
        strokeWeight(10);
      } else {
        strokeWeight(1);
      }
      line(0, i, width, i);
      line(i, 0, i, height);
    }
  }
  highlight() {
    // console.log(this.x, this.y);
    strokeWeight(10);
    stroke(125, 0, 255);
    fill(background_col);
    rect(this.x, this.y, this.x + this.s, this.y + this.s);
  }
}
