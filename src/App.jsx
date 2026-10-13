import {team} from "./data/team.js";

function getInitials(name) {
  return name
  .split(" ")
  .map((part) => part[0])
  .join("");
}


function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
      
        <div  className="mx-auto max-w-6xl px-4 py-8 sm:px6">
          <h1 className="text-3xl font-bold tracking-tight">Our Team</h1>
          <p className= "mt-2 text-slate-600">
            {team.length} people building great products together</p>
          </div>

      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 ">
        {
          team.length === 0 ?(
            <p className= "rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
              No team members yet
            </p>
          ):(
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {team.map((member) => (
                <li key={member.id} 
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-mid">
                  <div 
                  aria-hidden="true"
                  className= {`flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white ${member.avatar}`} >
                    {getInitials(member.name)}
                  </div>

                  <h2 className="mt-4 break-wordstext-lg font-semibold">
                    {member.name}</h2>
                  <p className= "text-sm font-medium text-cyan-700">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 ">
                    {member.location}
                  </p>
                  <div className="mt-auto w-full pt-5">
                    <a href={`malito:${member.email}`} 
                    className="block w-full rounded-lg border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700">
                      Email {member.name.split(" ")[0]}
                    </a>
                  </div>

                </li>))}
            </ul>
          )
        }
      </main>
    
    </div>
  )
  }
  export default App;