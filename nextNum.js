// এমন একটি প্রোগ্রাম লিখ যেখানে তিনটি সংখ্যা প্রদান করলে , পরবর্তী সংখ্যাটি বের করতে হবে।

// ইনপুট
// ইনপুট হবে তিনটি integer সংখ্যা।

// আউটপুট
// আউটপুট হবে একটি integer সংখ্যা।

function main(input) {
  const data = input.split(" ");

  const firstNum = Number(data[0]);
  const secondNum = Number(data[1]);
  const thirdNum = Number(data[2]);

  const diff = secondNum - firstNum;

  const output = diff + thirdNum;

  console.log(output);
}

main("3 5 7");
