export default function Header({ testResults }) {
  const rating = (number) => {
    if (number < 30) {
      return { rating: "Okay", percent: "0%" };
    } else if (number >= 30 && number < 60) {
      return { rating: "Good", percent: "30%" };
    } else if (number >= 60 && number < 80) {
      return { rating: "Great", percent: "60%" };
    } else {
      return { rating: "Amazing", percent: "80%" };
    }
  };
  return (
    <div className="w-full bg-gradient-to-b from-headerLight to-headerDark flex flex-col items-center gap-5 py-8 rounded-b-3xl">
      <h1 className="text-lightLavender text-lg">Your Result</h1>

      <div className="rounded-full bg-gradient-to-t from-circleDark to-circleLight flex flex-col items-center justify-center w-36 h-36">
        <h2 className="text-white font-extrabold text-5xl">{testResults}</h2>
        <h2 className="text-lightLavender text-lg">of 100</h2>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-white font-medium text-2xl">
          {rating(testResults).rating}
        </h2>
        <p className="text-lightLavender text-md mx-10 text-center ">
          {testResults < 30
            ? "You did not score very high man."
            : `You scored higher than ${
                rating(testResults).percent
              } of the people who
          have taken these tests.`}
        </p>
      </div>
    </div>
  );
}
