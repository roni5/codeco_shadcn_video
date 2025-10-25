import AnimatedRainbowText from "@/components/AnimatedRainbowText";
import MyPageSkeleton from "@/components/skeleton";
import Spinner from "@/components/Spinner";
import { Title } from "@radix-ui/react-dialog";
import Image from 'next/image'

export default function page() {
  return (
    <div className="w-full py-18 md:py-24 lg:py-32 bg-gray-50 text-gray-800 flex justify-center items-center min-h-screen p-4">
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
        {/* Main Title */}
        <h1 className="flex justify-center items-center mb-3 font-bold text-2xl text-[#b0ccc4]">
          🇨​🇴​🇩​🇪​🇨​🇴​.🇹​🇪​🇨​🇭​
        </h1>
        <p className="mb-3 font-bold text-2xl text-[#b0ccc4]">
          T·a·s·k·f·u·l·.·c·o·.·u·k​
        </p>
        <blockquote className="hidden md:block  text-center text-2xl font-semibold text-gray-900 italic pr-2">
          When you look &nbsp;
          <span className="relative">
            <span
              className=" absolute -inset-1  -skew-y-3 bg-pink-500"
              aria-hidden="true"
            />
            <span className="relative text-white">annoyed</span>
            {''}
          </span>
          &nbsp;all the time, people think you're busy.
        </blockquote>
        <AnimatedRainbowText />

        <section>
          <form>
            <fieldset>
              <legend>Published status</legend>
              <input
                id="draft"
                className="peer/draft"
                type="radio"
                name="status"
                checked
              />
              <label
                htmlFor="draft"
                className="peer-checked/draft:text-sky-500"
              >
                Draft
              </label>
              <input
                id="published"
                className="peer/published"
                type="radio"
                name="status"
              />
              <label
                htmlFor="published"
                className="peer-checked/published:text-sky-500"
              >
                Published
              </label>
              <div className="hidden peer-checked/draft:block">
                Drafts are only visible to administrators.
              </div>
              <div className="hidden peer-checked/published:block">
                Your post will be publicly visible on your site.
              </div>
            </fieldset>
            <fieldset aria-label="Choose a memory option">
              <div className="flex items-center justify-between ">
                <div>RAM</div>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  {' '}
                  See performance specs{' '}
                </a>
              </div>
              <div className="mt-4 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
                <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
                  <input
                    type="radio"
                    name="memory-option"
                    value="4 GB"
                    className="sr-only"
                  />
                  <span>4 GB</span>
                </label>
                <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
                  <input
                    type="radio"
                    name="memory-option"
                    value="8 GB"
                    className="sr-only"
                  />
                  <span>8 GB</span>
                </label>
                <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
                  <input
                    type="radio"
                    name="memory-option"
                    value="16 GB"
                    className="sr-only"
                  />
                  <span>16 GB</span>
                </label>
                <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
                  <input
                    type="radio"
                    name="memory-option"
                    value="32 GB"
                    className="sr-only"
                  />
                  <span>32 GB</span>
                </label>
                <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
                  <input
                    type="radio"
                    name="memory-option"
                    value="64 GB"
                    className="sr-only"
                  />
                  <span>64 GB</span>
                </label>
                <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
                  <input
                    type="radio"
                    name="memory-option"
                    value="128 GB"
                    className="sr-only"
                    defaultChecked
                  />
                  <span>128 GB</span>
                </label>
              </div>
            </fieldset>
            <label>
              <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="..."
                placeholder="you@example.com"
              />
            </label>
            <input
              className="placeholder:text-gray-500 placeholder:italic ..."
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <input
              type="file"
              className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="is-dirty peer"
              required
            />
            <div className="peer-[.is-dirty]:peer-required:block hidden">
              This field is required.
            </div>
            <label className="block">
              <span className="...">Email</span>
              <input type="email" className="peer ..." />
              <p className="invisible peer-invalid:visible ...">
                Please provide a valid email address.
              </p>
            </label>
            <div className="flex  justify-center p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer transition duration-200 ease-in-out">
              <button type="button" className="bg-indigo-500 ..." disabled>
                <svg
                  className="animate-spin motion-reduce:hidden "
                  viewBox="0 0 24 24"
                >
                  <title>Processing...</title>
                </svg>
                {/* <Spinner /> */}
                Processing...
              </button>
            </div>
          </form>
        </section>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          The importance of fast language models lies in their ability to
          process and generate human-like language quickly, efficiently, and
          accurately.
        </p>

        {/* Section Heading */}

       
        <h2 className="text-2xl md:text-3xl font-bold text-pretty text-gray-700 mb-6">
  Here are some key reasons why fast language models are{' '}
  <span className="relative inline-block pb-1">
    crucial
    <Image
      src="/img/pink-squizzle.svg"
      alt="Codeco Logo"
      className="absolute -bottom-2 left-0 w-full h-auto"
      width={100}
      height={24}
      priority
    />
  </span>
</h2>
        {/* Reasons List */}
        <ul className="space-y-6 mb-8">
          <li className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">
              Improved User Experience:
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Fast language models enable real-time interactions, allowing users
              to engage with applications, services, or devices in a more
              natural and seamless way. This leads to a better user experience,
              increased engagement, and higher satisfaction.
            </p>
          </li>
          <li className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">
              Increased Productivity:
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Faster language processing enables users to complete tasks more
              quickly, such as:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base md:text-lg">
              <li>
                <strong className="font-medium">Language translation:</strong>{' '}
                rapid translation of text or speech enables efficient
                communication across languages.
              </li>
              <li>
                <strong className="font-medium">Text summarization:</strong>{' '}
                quickly summarizing long documents or articles saves time and
                effort.
              </li>
              <li>
                <strong className="font-medium">
                  Chatbots and virtual assistants:
                </strong>{' '}
                fast response times enable more efficient and effective
                interactions.
              </li>
            </ul>
          </li>
          <li className="bg-yellow-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-2">
              Enhanced Accessibility:
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Fast language models can help bridge language gaps and improve
              accessibility for:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base md:text-lg">
              <li>
                <strong className="font-medium">Language learners:</strong>{' '}
                rapid language translation and feedback facilitate language
                learning.
              </li>
              <li>
                <strong className="font-medium">
                  People with disabilities:
                </strong>{' '}
                fast language processing enables more efficient communication
                for individuals with speech or hearing impairments.
              </li>
              <li>
                <strong className="font-medium">
                  Low-literacy populations:
                </strong>{' '}
                simple, fast, and accessible language models can help improve
                communication and access to information.
              </li>
            </ul>
          </li>
          <li className="bg-red-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-red-700 mb-2">
              Real-time Applications:
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Fast language models are essential for real-time applications,
              such as:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base md:text-lg">
              <li>
                <strong className="font-medium">
                  Live language interpretation:
                </strong>{' '}
                simultaneous interpretation for events, meetings, or
                conversations.
              </li>
              <li>
                <strong className="font-medium">
                  Real-time sentiment analysis:
                </strong>{' '}
                monitoring and analyzing public opinion, sentiment, or emotions.
              </li>
              <li>
                <strong className="font-medium">
                  Gaming and virtual reality:
                </strong>{' '}
                fast language processing enables immersive experiences with
                interactive storytelling and dialogue.
              </li>
            </ul>
          </li>
          <li className="bg-purple-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-purple-700 mb-2">
              Scalability and Efficiency:
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Fast language models can handle large volumes of data, making them
              more scalable and efficient for:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base md:text-lg">
              <li>
                <strong className="font-medium">Big data analysis:</strong>{' '}
                rapid processing of large datasets for insights and patterns.
              </li>
              <li>
                <strong className="font-medium">Cloud services:</strong>{' '}
                efficient language processing enables cloud-based applications
                to handle a large number of users.
              </li>
            </ul>
          </li>
          <li className="bg-pink-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-pink-700 mb-2">
              Competitive Advantage:
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              In various industries, fast language models can provide a
              competitive edge, such as:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base md:text-lg">
              <li>
                <strong className="font-medium">Customer service:</strong> rapid
                response times and efficient resolution of customer inquiries.
              </li>
              <li>
                <strong className="font-medium">Financial analysis:</strong>{' '}
                fast text analysis and sentiment analysis for informed
                investment decisions.
              </li>
            </ul>
          </li>
          <li className="bg-teal-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-2">
              Advancements in AI Research:
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Fast language models drive advancements in AI research, enabling
              the development of more sophisticated and accurate models. This,
              in turn, leads to breakthroughs in areas like:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base md:text-lg">
              <li>
                <strong className="font-medium">
                  Natural Language Processing (NLP)
                </strong>
              </li>
              <li>
                <strong className="font-medium">Machine Learning (ML)</strong>
              </li>
              <li>
                <strong className="font-medium">
                  Human-Computer Interaction (HCI)
                </strong>
              </li>
            </ul>
          </li>
        </ul>

        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          To achieve fast language models, researchers and developers employ
          various techniques, such as:
        </h2>

        {/* Techniques List */}
        <ul className="list-disc list-inside ml-4 space-y-2 text-base md:text-lg mb-8">
          <li>
            <strong className="font-medium">Model pruning:</strong> reducing
            model size and complexity
          </li>
          <li>
            <strong className="font-medium">Knowledge distillation:</strong>{' '}
            transferring knowledge from large models to smaller ones
          </li>
          <li>
            <strong className="font-medium">Efficient algorithms:</strong>{' '}
            optimizing algorithms for faster computation
          </li>
          <li>
            <strong className="font-medium">Specialized hardware:</strong>{' '}
            leveraging GPU acceleration, TPUs, or FPGAs for faster processing
          </li>
          <li>
            <strong className="font-medium">Parallelization:</strong>{' '}
            distributing computations across multiple devices or machines
          </li>
        </ul>

        {/* Concluding Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          The importance of fast language models will continue to grow as the
          demand for efficient, accurate, and natural human-computer interaction
          increases.
        </p>
      </div>
    </div>
  )
}
