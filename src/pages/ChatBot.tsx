// import MainLayout from "@/layouts/MainLayout";
import { BubbleChat, FullPageChat } from "flowise-embed-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ChatBot = () => {
  return (
    <>
      <BubbleChat
        chatflowid="a50759ea-9d7e-49fc-932e-3a0d144dc7d5"
        apiHost="http://192.168.24.106:3000"
      />
      <Link to={"/dashboard"} className="p-3 absolute top-0 z-[1000]">
        <ArrowLeft />
      </Link>
    </>
  );
};
// const ChatBot = () => {
//   return (
//     <MainLayout>
//       <div className="bg-white/80 h-screen text-gray-700 px-2">
//         <div className="h-3/4 overflow-y-auto pt-5">
//           <ul className="space-y-5">
//             <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
//               <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
//                 <h2 className="font-medium text-gray-800">Saya </h2>
//                 <div className="space-y-1.5">
//                   <p className="mb-1.5 text-sm text-gray-800">
//                     You can ask questions like:
//                   </p>
//                   <ul className="list-disc list-outside space-y-1.5 ps-3.5">
//                     <li className="text-sm text-gray-800">What's ?</li>

//                     <li className="text-sm text-gray-800">
//                       How many Starter Pages & Examples are there?
//                     </li>

//                     <li className="text-sm text-gray-800">Is?</li>
//                   </ul>
//                 </div>
//               </div>
//             </li>
//             <li className="max-w-lg ms-auto flex justify-end gap-x-2 sm:gap-x-4">
//               <div className="grow text-end space-y-3">
//                 <div className="inline-block bg-primary rounded-2xl p-4 shadow-sm">
//                   <p className="text-sm text-white">Tes</p>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className="flex gap-2 items-center absolute w-[95%] top-1">
//           <input
//             type="text"
//             className="w-full border p-2"
//             placeholder="Mulai Katakan Sesuatu"
//           />
//           <ArrowUp className="h-8 w-8 bg-primary text-white p-1 rounded-full" />
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

export default ChatBot;
