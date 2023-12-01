import NewChat from "./NewChat";
import "../styles/globals.css";
import { PlusIcon } from "@heroicons/react/24/solid";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Model selection */}</div>
          {/* Map through the chat rows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
