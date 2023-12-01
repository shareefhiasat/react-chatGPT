import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import "../styles/globals.css";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Make up a story about Sharky, a tooth-brushing shark superhero
            </p>
            <p className="infoText">
              Come up with concepts for a retro-style arcade game
            </p>
            <p className="infoText">
              Make a content strategy for a newsletter featuring free local
              weekend events
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Make up a story about Sharky, a tooth-brushing shark superhero
            </p>
            <p className="infoText">
              Come up with concepts for a retro-style arcade game
            </p>
            <p className="infoText">
              Make a content strategy for a newsletter featuring free local
              weekend events
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitation</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Make up a story about Sharky, a tooth-brushing shark superhero
            </p>
            <p className="infoText">
              Come up with concepts for a retro-style arcade game
            </p>
            <p className="infoText">
              Make a content strategy for a newsletter featuring free local
              weekend events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
