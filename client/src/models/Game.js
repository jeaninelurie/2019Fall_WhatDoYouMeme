export const Game_Server = {
    Players: [],
    Picture_Deck: [],
    Caption_Deck: [],
    Dealer: -1,
    Captions_In_Play: [], //strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export const Game_Client = {
    Players: [
        { name: "Moshe", points: 0 },
        { name: "Bernie", points: 0 },
        { name: "Donald", points: 0 },
        { name: "Andrew", points: 0 }

    ],
    Dealer: -1,
    Captions_In_Play: [], //strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export var My_Captions = [
        "I'm gonna have to charge you extra.", 
        "I think it's time to call for backup.", 
        "You want fries with that?",
        "Is it too late to apologize?",
        "Feed me!",
        "How you doin?"];

export class Player {
    name;
    points;
    captions;
}