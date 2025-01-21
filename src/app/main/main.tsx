export default function Musiclist (){
type Musician = {
    name:string;
    song:string;
}

const musicians:Musician[] = [
    {
        name: "The weeknd",
        song: "Blinding light"
    },
    {
        name: "Diamond Plantnumz",
        song: "Hallelujah"
    },
    {
        name: "Chirs Brown ",
        song: "11:11"
    },
    {
        name: "Alan walker",
        song: "Faded"
    },
    {
        name: "Mushmellow",
        song: "Alone"
    }
]

return(
    <div>
       <ul>
        {musicians.map((index,name)=>
            <li key={name}>{index.name}-{index.song}</li>
        )}
       </ul>
    </div>
)
}