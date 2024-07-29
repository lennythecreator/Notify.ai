import { NoteCard } from "../components/ui/NoteCard"
import { Widget } from "../components/ui/widget"

export const Home = () => {
  return (
   <>
    <Widget>
      <h1 className="text-left text-xl">Home</h1>
      <input className="w-96 h-10 m-4 p-4 rounded-[8px] outline-none bg-slate-50 border-2" type="search" name="" id="" placeholder="Search Notes" />
      <button className="w-24 h-10 m-4 p-2 rounded-[8px] text-white">Add Note</button>
      <div className="grid grid-cols-3 gap-y-3">
        <NoteCard/>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
        <NoteCard></NoteCard>
      </div>  
    </Widget>
   </>
  )
}
