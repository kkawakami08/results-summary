export default function Header() {
  return (
    <div className="bg-gradient-to-b from-headerLight to-headerDark flex flex-col items-center gap-5 py-8 rounded-b-3xl">
      <h1 className="text-lightLavender text-lg">Your Result</h1>

      <div className="rounded-full bg-gradient-to-t from-circleDark to-circleLight flex flex-col items-center justify-center w-36 h-36">
        <h2 className="text-white font-extrabold text-5xl">76</h2>
        <h2 className="text-lightLavender text-lg">of 100</h2>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-white font-medium text-2xl">Great</h2>
        <p className="text-lightLavender text-md w-3/4 text-center">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
