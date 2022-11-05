import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/20/solid';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

type CardProps = {
  cardType: "comment";
}
const Card = () => (
  <div className="h-56 bg-red-100">
    {/* This is the topbar of the card */}
    <div className="flex flex-1 flex-row justify-between">
      {/* Card type badge on the top right */}
      <span className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
        <ChatBubbleLeftIcon className="h-3 w-3" />
        Comment
      </span>
    </div>
    <div className='overflow-y-auto text-sm font-normal'>This is a comment I had about something important </div>
  </div>
);
export default Card;
