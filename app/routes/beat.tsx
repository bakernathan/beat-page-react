import { useEffect, useState } from "react";
import { HttpProxy } from "vite";

export interface Beat{
    guid: string;
    title: string;
    trackLength: number; //Num of seconds
    datePublished: Date;
    collabs?: Array<string>;
    audioLink: string;
}


var beatList : Array<Beat> = [];


export function BeatTile({ beatID }: any) {
    const [beat, setBeat] = useState<Beat>();

    useEffect(() => {
        setBeat(getBeatFromId(beatID));
    });

    return (
        beat?(
            <div className="container mx-auto bg-violet-400 rounded-lg px-10 w-2/3 h-auto m-0.5
            hover:bg-violet-600">
                <p className="font-mono">{beat.title}</p> 
                <audio controls className="bg-violet-400 hover:bg-violet-600 w-full h-10"></audio>
                <p className="font-mono">{beat.datePublished.toLocaleString()}</p>


            </div>
        ): <div></div>
    );
}

export function BeatTileList(){
    return (
    <ul>
        {['1', '2'].map((item, index) => (
            <li key={index}>
                <BeatTile beatID={item}/>
            </li>
        ))}
    </ul>
    );
}


const fakeBeats : Beat[] = [
    {
        guid: '1', title: 'Beat 1', trackLength: 78, datePublished: new Date(Date.parse('2024-07-01')), collabs: ['wiban'], audioLink: '/beat_1'
    },
    {
        guid: '2', title: 'Beat 2', trackLength: 125, datePublished: new Date(Date.parse('2023-01-24')), audioLink: '/beat_2'
    }
];

function getBeatFromId(id: string): Beat{
    //return fetch('http://192.180.0.25/beat/' + id)
    //.then(response => response.json());
    console.log("made it");
    var beat = fakeBeats.find(beat => beat.guid === id);
    console.log(beat);
    if(beat === undefined){
        throw new TypeError();
    }
    return beat;
}