// স্বরবর্ণের জন্য অনুসন্ধান

// সমস্যার বিবরণ
// এমন একটি প্রোগ্রাম লিখ যা চেক করবে একটি string এর মধ্যে কোন স্বরবর্ণ আছে কীনা।

// ইনপুট
// ইনপুটটি হবে একটি String।

// আউটপুট
// আউটপুটে উত্তর থাকবে string টিতে কোন স্বরবর্ণ আছে কিনা। যদি vowel থাকে তাহলে প্রিন্ট করবে "The string contains a vowel."। যদি vowel না থাকে তাহলে প্রিন্ট করবে "The string does not contain any vowel."

// সীমাবদ্ধতা
// যে কোন একটি স্বরবর্ণ পেলেই প্রোগ্রামটি থেমে যাবে। Hello

function main(input) {
  const data = input;

  if (
    data.includes("a") ||
    data.includes("e") ||
    data.includes("i") ||
    data.includes("o") ||
    data.includes("u")
  ) {
    console.log("The string contains a vowel.");
  } else {
    console.log("The string does not contain any vowel.");
  }
}
main("hello");
