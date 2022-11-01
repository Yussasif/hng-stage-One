const body = () => {
    return (  
        <div className="flex flex-col mx-3 md:w-3/5 justify-center items-center md:m-auto mt-6">
        <a href="https://twitter.com/This_TunjiGuy?s=09" id="twitter" className="w-full rounded-md p-3 my-2 font-bold bg-gray-300">Twitter Link</a>
        <a href="@This_TunjiGuy" id="slack" className="w-full  hidden rounded-md p-3 my-2 font-bold bg-gray-300">Slack Link</a>
        <a href="https://training.zuri.team/" id="btn_zuri" className="w-full  rounded-md p-3 my-2 font-bold bg-gray-300">Zuri Team</a>
        <a href="http://books.zuri.team/" id="books" className="w-full  rounded-md p-3 my-2 font-bold bg-gray-300">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=this_tunjiguy" id="book_python" className="w-full  rounded-md p-3 my-2 font-bold bg-gray-300">Python Books</a>
        <a href="https://background.zuri.team/" id="pitch" className="w-full  rounded-md p-3 my-2 font-bold bg-gray-300">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id="book_design" className="w-full  rounded-md p-3 my-2 font-bold bg-gray-300">Design Books</a>

      </div>

    );
}
 
export default body;