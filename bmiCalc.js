// এমন একটি প্রোগ্রাম লিখ যেখানে ইউজার তার উচ্চতা(মিটার) এবং ওজন(কেজি) প্রদান করলে বিএমআই ক্যালকুলেট করতে হবে।

// ইনপুট
// ইনপুট হবে দুইটি ডাবল নাম্বার যা যথাক্রমে উচ্চতা এবং ওজনের পরিমাণ।

// আউটপুট
// *যদি bmi < 18.5 প্রিন্ট করবে "Underweight" *যদি bmi >= 18.5 & bmi < 25.0 প্রিন্ট করবে "Normal weight" *যদি bmi >= 25.0 & bmi < 30.0 প্রিন্ট করবে "Overweight" *অন্যথায় প্রিন্ট করবে "Obese"

function main(input) {
  const data = input.split(" ");

  const height = Number(data[0]);
  const weight = Number(data[1]);

  const bmi = calcBMI(height, weight);

  const weightClass = getWeightClass(bmi);

  console.log("BMI: " + bmi.toFixed(2));
  console.log(weightClass);
}

function calcBMI(height, weight) {
  return weight / (height * height);
}

function getWeightClass(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25.0) {
    return "Normal weight";
  } else if (bmi >= 25.0 && bmi < 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

main("1.6 60");
