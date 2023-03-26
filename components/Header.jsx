export default function Header() {
  return (
    <div className="bg-gradient-to-b from-headerLight to-headerDark flex flex-col items-center h-2/5 ">
      <h1 className="text-lightLavender text-lg">Your Result</h1>
      <div className="rounded-full bg-gradient-to-b from-circleDark to-circleLight flex flex-col items-center justify-center w-36 h-36 ">
        <h2 className="text-white font-extrabold text-5xl font-hanken">76</h2>
        <h2 className="text-lightLavender text-lg">of 100</h2>
      </div>
      <h2 className="text-white font-medium">Great</h2>
      <p className="text-lightLavender text-lg">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
