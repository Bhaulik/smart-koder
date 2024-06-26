import Link from "next/link";

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Interview Alpha AI
            </h1>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-2xl/none">
              Powered by Google Gemini ai
            </h2>{" "}
            <h2 className="text-md font-bold tracking-tighter sm:text-md xl:text-md/none">
              Developed by Bhaulik Patel
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto">
              Elevate your coding skills with our AI-powered Interview
              interviewer. Unlock personalized practice and tailored feedback
            </p>
            <div className="flex justify-center gap-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/setup"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1 text-center">
              <RocketIcon className="h-8 w-8 text-gray-900 dark:text-gray-50 mx-auto" />
              <h3 className="text-lg font-bold">Personalized Practice</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI-driven platform analyzes your strengths and weaknesses to
                provide tailored coding challenges, helping you improve
                efficiently.
              </p>
            </div>{" "}
            <div className="grid gap-1 text-center">
              <ReportIcon className="h-8 w-8 text-gray-900 dark:text-gray-50 mx-auto" />
              <h3 className="text-lg font-bold">Easy Report Interface</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The Interface is an all in one interface that tells you your run
                times, your errors, optimizations you could make and even web
                resources and vides to enhance your understanding
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <ReplyIcon className="h-8 w-8 text-gray-900 dark:text-gray-50 mx-auto" />
              <h3 className="text-lg font-bold">Actionable Feedback</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive detailed feedback on your solutions, including
                performance analysis and suggestions for improvement, to
                accelerate your learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
function ReportIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6h8" />
      <path d="M8 12h8" />
      <path d="M8 18h8" />
      <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" />
    </svg>
  );
}
function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
